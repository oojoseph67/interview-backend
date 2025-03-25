import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { AiResponse } from './ai-response.entity';
import { User } from 'src/auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class AiSurvey extends Document {
  @ApiProperty({
    description: 'The title of the survey',
    example: 'Customer Satisfaction Survey'
  })
  @Prop({
    type: String,
    required: true,
  })
  title: string;

  @ApiProperty({
    description: 'Array of questions in the survey',
    example: ['How satisfied are you with our service?', 'Would you recommend us to others?'],
    type: [String]
  })
  @Prop({
    type: [String],
    required: true,
  })
  questions: string[];

  @ApiProperty({
    description: 'The user who created the survey',
    type: User
  })
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }],
  })
  userId: User;

  @ApiProperty({
    description: 'Array of responses to the survey',
    type: [AiResponse]
  })
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'AiResponse' }],
  })
  responses?: AiResponse[];

  @ApiProperty({
    description: 'Timestamp when the survey was created',
    example: '2024-03-20T10:00:00.000Z'
  })
  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;
}

export type AiSurveyDocument = HydratedDocument<AiSurvey>;

export const AiSurveySchema = SchemaFactory.createForClass(AiSurvey);
