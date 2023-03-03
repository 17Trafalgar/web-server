import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from './database/entities/auto.entity';
import { User } from './database/entities/user.entity';
import { UsersModule } from './user.service/user.module';
import { AutoModule } from './auto.service/auto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('database.postgres'),
        entities: [Auto, User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AutoModule,
  ],
})
export class AppModule {}
