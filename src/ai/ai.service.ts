import { Injectable } from '@nestjs/common';
import { CreateAiResponseDto } from './dto/create-ai-response.dto';
import { CreateAiSurveyDto } from './dto/create-ai-survey.dto';
import { UpdateAiResponseDto, UpdateAiSurveyDto } from './dto/update-ai.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AiSurvey } from './entities/ai-survey.entity';
import { AiResponse } from './entities/ai-response.entity';

@Injectable()
export class AiService {
  constructor(
    @InjectModel(AiSurvey.name)
    private readonly aiSurveyModel: Model<AiSurvey>,

    @InjectModel(AiResponse.name)
    private readonly aiResponseModel: Model<AiResponse>,
  ) {}

  create(createAiDto: CreateAiSurveyDto) {
    return 'This action adds a new ai';
  }

  findAll() {
    return `This action returns all ai`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ai`;
  }

  update(id: number, updateAiDto: UpdateAiSurveyDto) {
    return `This action updates a #${id} ai`;
  }

  remove(id: number) {
    return `This action removes a #${id} ai`;
  }
}
