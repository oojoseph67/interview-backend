import {
  forwardRef,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { GoogleTokenDto } from './dtos/google-token.dto';
import googleConfig from 'src/config/google.config';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { GenerateTokenProvider } from './provider/generate-token.provider';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oauthClient: OAuth2Client;

  constructor(
    // injecting google-config as well as jwt configuration

    @Inject(googleConfig.KEY)
    private googleConfiguration: ConfigType<typeof googleConfig>,

    @InjectModel(User.name)
    private readonly userModel: Model<User>,

    private readonly generateToken: GenerateTokenProvider,
  ) {}

  onModuleInit() {
    const clientId = this.googleConfiguration.googleClientId;
    const clientSecret = this.googleConfiguration.googleClientSecret;

    this.oauthClient = new OAuth2Client({
      clientId,
      clientSecret,
      redirectUri: this.googleConfiguration.googleRedirectUri,
    });
  }

  public async authenticate({ token }: { token: GoogleTokenDto }) {
    try {
      // verify token
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: token.access_token,
      });

      // extract payload from token
      const payload = loginTicket.getPayload();
      const { sub: googleId, email, given_name, family_name } = payload;

      const existingUser = await this.userModel.findOne({
        googleId: googleId,
      });

      if (existingUser) {
        return this.generateToken.generateTokens({ user: existingUser });
      }

      const user = await this.userModel.create({
        googleId,
        email,
        firstName: given_name,
        lastName: family_name,
      });

      return this.generateToken.generateTokens({ user });
    } catch (error: any) {
      throw new UnauthorizedException(`${error.message}`, {
        cause: error.message,
        description: error,
      });
    }
  }
}
