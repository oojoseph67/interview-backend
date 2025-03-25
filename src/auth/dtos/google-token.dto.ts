import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GoogleTokenDto {
  @ApiProperty({
    description: 'The Google OAuth access token',
    example: 'ya29.a0AfB_byC...'
  })
  @IsNotEmpty()
  access_token: string;
}
