import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class User extends Document {
  @ApiProperty({
    description: 'The unique Google ID of the user',
    example: '123456789'
  })
  @Prop({
    type: String,
    required: true,
  })
  googleId: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'John'
  })
  @Prop({
    type: String,
    required: true,
  })
  firstName: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
    required: false
  })
  @Prop({
    type: String,
    default: '',
  })
  lastName?: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'john.doe@example.com'
  })
  @Prop({
    type: String,
    required: true,
  })
  email: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
