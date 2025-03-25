import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AiModule } from './ai/ai.module';
import databaseConfig from './config/database.config';
import environmentValidation from './config/environmentValidation';
import { GoogleAuthenticationModule } from './auth/google-authentication.module';
import { AccessTokenGuard } from './auth/guards/access-token/access-token.guard';
import { AuthenticationGuard } from './auth/guards/authentication/authentication.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthModule } from './auth/jwt.module';
import jwtConfig from './config/jwt.config';

const ENV = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV === 'development' ? '.env' : `.env.${ENV}`,
      load: [databaseConfig],
      validationSchema: environmentValidation,
    }),

    ConfigModule.forFeature(jwtConfig),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),

    JwtAuthModule,
    AiModule,
    GoogleAuthenticationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AccessTokenGuard, // because authentication guard has a dependency injection of AccessTokenGuard
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
      // useClass: AccessTokenGuard,
    }, // applying global guard
  ],
})
export class AppModule {}
