import { registerAs } from '@nestjs/config';

export default registerAs('googleEnv', () => {
  return {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
    googleRedirectUri: process.env.GOOGLE_REDIRECT_URI,
  };
});
