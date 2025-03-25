import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';

@Module({
  imports: [
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(jwtConfig)],
      useFactory: async (jwtConfiguration: ConfigType<typeof jwtConfig>) => ({
        secret: jwtConfiguration.jwtSecret,
        signOptions: {
          audience: jwtConfiguration.jwtTokenAudience,
          issuer: jwtConfiguration.jwtTokenIssuer,
          expiresIn: jwtConfiguration.jwtTokenExpiration,
        },
      }),
      inject: [jwtConfig.KEY],
    }),
  ],
  exports: [JwtModule],
})
export class JwtAuthModule {} 