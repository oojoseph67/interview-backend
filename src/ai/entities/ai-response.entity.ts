import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema()
export class AiResponse extends Document {
  @Prop({
    type: String,
    required: true,
  })
  surveyId: string;

  @Prop({
    type: [String],
    required: true,
  })
  answers: string[];

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;
}

export type AiResponseDocument = HydratedDocument<AiResponse>;

export const AiResponseSchema = SchemaFactory.createForClass(AiResponse);
