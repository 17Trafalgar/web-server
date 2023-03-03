import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { createAutoDTO } from 'src/database/auto-dto/create.auto.dto';
import { deleteAutoDTO } from 'src/database/auto-dto/delete.auto.dto';
import { updateAutoDTO } from 'src/database/auto-dto/update.auto.dto';
import { Auto } from '../database/entities/auto.entity';

@Injectable()
export class AutoService {
  constructor(
    @InjectRepository(Auto) private autoRepository: Repository<Auto>,
  ) {}

  addAuto(auto: createAutoDTO) {
    return this.autoRepository.save(auto);
  }

  getAutos() {
    return this.autoRepository.find();
  }

  deleteAutoFromDB(auto: deleteAutoDTO) {
    return this.autoRepository.delete(auto);
  }

  updateAuto(auto: updateAutoDTO) {
    return this.autoRepository.update(auto.id, auto);
  }

  autoWithoutOwner(brand?: string) {
    return this.autoRepository.find({
      where: { owner: IsNull(), ...(brand ? { brand } : {}) },
    });
  }
}
