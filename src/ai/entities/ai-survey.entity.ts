import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { AiResponse } from './ai-response.entity';

@Schema()
export class AiSurvey extends Document {
  @Prop({
    type: String,
    required: true,
  })
  title: string;

  @Prop({
    type: [String],
    required: true,
  })
  questions: string[];

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'AiResponse' }],
  })
  responses?: AiResponse[];

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;
}

export type AiSurveyDocument = HydratedDocument<AiSurvey>;

export const AiSurveySchema = SchemaFactory.createForClass(AiSurvey);
