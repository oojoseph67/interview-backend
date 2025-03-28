import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAiResponseDto } from './dto/create-ai-response.dto';
import { CreateAiSurveyDto } from './dto/create-ai-survey.dto';
import { UpdateAiResponseDto, UpdateAiSurveyDto } from './dto/update-ai.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AiSurvey } from './entities/ai-survey.entity';
import { AiResponse } from './entities/ai-response.entity';
import { GenerateQuestions } from './generate-questions/generate-questions';
import { UserPayload } from 'src/auth/guards/access-token/access-token.guard';

@Injectable()
export class AiService {
  constructor(
    @InjectModel(AiSurvey.name)
    private readonly aiSurveyModel: Model<AiSurvey>,

    @InjectModel(AiResponse.name)
    private readonly aiResponseModel: Model<AiResponse>,

    private generateQuestionsProvider: GenerateQuestions,
  ) {}

  async generateQuestions(createAiDto: CreateAiSurveyDto, user: UserPayload) {
    console.log({ user });

    // generating questions
    const questions = await this.generateQuestionsProvider.generateQuestions({
      title: createAiDto.title,
    });

    // saving the survey
    const aiSurvey = new this.aiSurveyModel({
      title: createAiDto.title,
      userId: user.sub,
      questions,
    });
    await aiSurvey.save();

    return { questions, surveyId: aiSurvey._id };
  }

  async suggestTitles(): Promise<string[]> {
    return await this.generateQuestionsProvider.suggestTitles();
  }

  async respondToQuestion(
    respondToQuestion: CreateAiResponseDto,
    user: UserPayload,
  ) {
    const aiSurvey = await this.aiSurveyModel.findById(
      respondToQuestion.surveyId,
    );

    if (aiSurvey.userId.toString() !== user.sub.toString()) {
      throw new HttpException(
        'This Survey doesnt belong to you',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const aiResponse = new this.aiResponseModel(respondToQuestion);
    await aiResponse.save();
    aiSurvey.responses.push(aiResponse);
    await aiSurvey.save();

    return aiResponse;
  }

  // findAll() {
  //   return `This action returns all ai`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} ai`;
  // }

  // update(id: number, updateAiDto: UpdateAiSurveyDto) {
  //   return `This action updates a #${id} ai`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} ai`;
  // }
}
