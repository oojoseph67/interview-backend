import { IsNotEmpty } from 'class-validator';

export class GoogleTokenDto {
  @IsNotEmpty()
  access_token: string;
}
