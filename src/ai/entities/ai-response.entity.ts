import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class AiResponse extends Document {
  @ApiProperty({
    description: 'The ID of the survey this response belongs to',
    example: '507f1f77bcf86cd799439011'
  })
  @Prop({
    type: String,
    required: true,
  })
  surveyId: string;

  @ApiProperty({
    description: 'Array of answers provided for the survey questions',
    example: ['Very satisfied', 'Yes, I would recommend'],
    type: [String]
  })
  @Prop({
    type: [String],
    required: true,
  })
  answers: string[];

  @ApiProperty({
    description: 'Timestamp when the response was submitted',
    example: '2024-03-20T10:30:00.000Z'
  })
  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt: Date;
}

export type AiResponseDocument = HydratedDocument<AiResponse>;

export const AiResponseSchema = SchemaFactory.createForClass(AiResponse);
