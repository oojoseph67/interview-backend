import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAiSurveyDto {
  @ApiProperty({
    description: 'The title of the survey',
    example: 'Customer Satisfaction Survey'
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  // @IsNotEmpty()
  // @IsString({ each: true })
  // questions: string[];
}
