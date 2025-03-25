import { Module } from '@nestjs/common';
import { GoogleAuthenticationController } from './google-authentication.controller';
import { GoogleAuthenticationService } from './google-authentication.service';
import { ConfigModule } from '@nestjs/config';
import googleConfig from '../config/google.config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { GenerateTokenProvider } from './provider/generate-token.provider';
import { JwtAuthModule } from './jwt.module';
import jwtConfig from '../config/jwt.config';

@Module({
  controllers: [GoogleAuthenticationController],
  providers: [GoogleAuthenticationService, GenerateTokenProvider],
  imports: [
    ConfigModule.forFeature(googleConfig),
    ConfigModule.forFeature(jwtConfig),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    JwtAuthModule,
  ],
})
export class GoogleAuthenticationModule {}
