import { Transform } from 'class-transformer';
import { IsNotEmpty, IsMongoId, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAiResponseDto {
  @ApiProperty({
    description: 'The ID of the survey to respond to',
    example: '507f1f77bcf86cd799439011'
  })
  @IsNotEmpty()
  @IsMongoId()
  surveyId: string;

  @ApiProperty({
    description: 'Array of answers to the survey questions',
    example: ['Yes, I am satisfied', 'The service was excellent', 'I would recommend to others'],
    type: [String]
  })
  @IsNotEmpty()
  @IsString({ each: true })
  answers: string[];
}
