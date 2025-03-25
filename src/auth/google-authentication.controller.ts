import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { GoogleAuthenticationService } from './google-authentication.service';
import { Auth, AuthType } from './decorators/auth.decorator';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('Authentication')
@Controller('google-authentication')
export class GoogleAuthenticationController {
  constructor(
    private googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.NONE)
  @Post('')
  @ApiOperation({ summary: 'Authenticate user with Google token' })
  @ApiResponse({ 
    status: 200, 
    description: 'User authenticated successfully',
    type: User
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Invalid or expired token' 
  })
  googleAuthentication(@Body() body: GoogleTokenDto) {
    return this.googleAuthenticationService.authenticate({ token: body });
  }
}
