import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({
    type: String,
    required: true,
  })
  googleId: string;

  @Prop({
    type: String,
    required: true,
  })
  firstName: string;

  @Prop({
    type: String,
    required: true,
  })
  lastName: string;

  @Prop({
    type: String,
    required: true,
  })
  email: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
