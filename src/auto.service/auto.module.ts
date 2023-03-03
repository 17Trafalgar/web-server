import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';
import { AutoController } from './auto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from 'src/database/entities/auto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auto])],
  providers: [AutoService],
  controllers: [AutoController],
  exports: [AutoService],
})
export class AutoModule {}
