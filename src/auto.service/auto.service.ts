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

  addCar(auto: createAutoDTO) {
    return this.autoRepository.save(auto);
  }

  getCars() {
    return this.autoRepository.find();
  }

  deleteCarFromDB(auto: deleteAutoDTO) {
    return this.autoRepository.delete(auto);
  }

  updateCar(auto: updateAutoDTO) {
    return this.autoRepository.update(auto.id, auto);
  }

  carWithoutOwner(brand?: string) {
    return this.autoRepository.find({
      where: { owner: IsNull(), ...(brand ? { brand } : {}) },
    });
  }
}
