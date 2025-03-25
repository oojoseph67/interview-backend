import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAiSurveyDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  // @IsNotEmpty()
  // @IsString({ each: true })
  // questions: string[];
}
