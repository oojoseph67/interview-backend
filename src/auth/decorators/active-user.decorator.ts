import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {
  REQUEST_USER_KEY,
  UserPayload,
} from '../guards/access-token/access-token.guard';

export const ActiveUser = createParamDecorator(
  (field: keyof UserPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: UserPayload = request[REQUEST_USER_KEY];

    if (field) {
      return user[field];
    } else {
      return user;
    }
  },
);
