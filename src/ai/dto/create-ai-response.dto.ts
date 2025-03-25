import { Transform } from 'class-transformer';
import { IsNotEmpty, IsMongoId, IsString } from 'class-validator';

export class CreateAiResponseDto {
  @IsNotEmpty()
  @IsMongoId()
  surveyId: string;

  @IsNotEmpty()
  @IsString({ each: true })
  answers: string[];
}
