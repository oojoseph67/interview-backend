import { PartialType } from '@nestjs/swagger';
import { CreateAiResponseDto } from './create-ai-response.dto';
import { CreateAiSurveyDto } from './create-ai-survey.dto';

export class UpdateAiResponseDto extends PartialType(CreateAiResponseDto) {}
export class UpdateAiSurveyDto extends PartialType(CreateAiSurveyDto) {}
