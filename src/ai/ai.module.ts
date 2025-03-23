import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AiResponse, AiResponseSchema } from './entities/ai-response.entity';
import { AiSurvey, AiSurveySchema } from './entities/ai-survey.entity';

@Module({
  controllers: [AiController],
  providers: [AiService],
  imports: [
    MongooseModule.forFeature([
      {
        name: AiResponse.name,
        schema: AiResponseSchema,
      },
      {
        name: AiSurvey.name,
        schema: AiSurveySchema,
      },
    ]),
  ],
})
export class AiModule {}
