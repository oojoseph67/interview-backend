import { registerAs } from '@nestjs/config';

export default registerAs('databaseMongo', () => {
  return {
    MONGODB_URI: process.env.MONGODB_URI,
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
  };
});
