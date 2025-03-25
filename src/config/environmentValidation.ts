import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('production', 'development', 'test', 'staging')
    .default('development'),
  MONGODB_URI: Joi.string().required(),
  PORT: Joi.number().default(8888),
  HOST: Joi.string().default('0.0.0.0'),
  OPEN_AI_API_KEY: Joi.string().required(),
  CLAUDE_AI_API_KEY: Joi.string().required(),
  GOOGLE_CLIENT_ID: Joi.string().required(),
  GOOGLE_CLIENT_SECRET_KEY: Joi.string().required(),
  GOOGLE_REDIRECT_URI: Joi.string().required(),
});
