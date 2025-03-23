import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAiSurveyDto {
  @IsNotEmpty()
  @IsString()
  title: number;

  @IsNotEmpty()
  @IsString({ each: true })
  questions: string[];
}
