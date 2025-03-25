import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { GoogleAuthenticationService } from './google-authentication.service';
import { Auth, AuthType } from './decorators/auth.decorator';

@Controller('google-authentication')
export class GoogleAuthenticationController {
  constructor(
    private googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.NONE)
  @Post('')
  googleAuthentication(@Body() body: GoogleTokenDto) {
    return this.googleAuthenticationService.authenticate({ token: body });
  }
}
