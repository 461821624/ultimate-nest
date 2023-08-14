import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { NestConfigModule } from '@lib/config/config.module';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [NestConfigModule],
      useFactory: async (configService: ConfigService<Configs, true>) => ({
        isGlobal: true,
        secret: configService.get('jwt.secret', { infer: true }),
        signOptions: {
          expiresIn: configService.get('jwt.accessExpiry', { infer: true }),
          algorithm: 'HS256',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [JwtModule],
})
export class NestJwtModule {}
