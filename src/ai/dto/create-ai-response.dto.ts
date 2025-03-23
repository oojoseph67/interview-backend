import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAiResponseDto {
  @IsNotEmpty()
  @IsNumber()
  surveyId: number;

  @IsNotEmpty()
  @IsString({ each: true })
  answers: string[];
}
