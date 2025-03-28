import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use validation pipes globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setVersion('1.0')
    .setTitle('INTERVIEW API')
    .setDescription(
      'A REST API for managing AI-powered surveys and responses. This API provides endpoints for:\n' +
      '- Generating AI-powered survey questions\n' +
      '- Responding to survey questions\n' +
      '- Getting AI-suggested survey titles\n' +
      '- Google Authentication\n\n' +
      'The API uses JWT for authentication and includes comprehensive input validation.'
    )
    .setTermsOfService('https://example.com/terms')
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:8888', 'Development Server')
    .addServer('https://interview-backend-zswx.onrender.com', 'Production Server')
    .addBearerAuth({
      type: 'http',
      name: 'Authorization',
      scheme: '',
      bearerFormat: 'JWT',
    })
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  // Configure CORS with specific options
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const port = process.env.PORT || 8888;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Server running on port ${port}`);
}
bootstrap();
