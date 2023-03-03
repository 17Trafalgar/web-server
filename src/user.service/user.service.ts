import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { IsNull, Repository } from 'typeorm';
import { createUserDTO } from 'src/database/user-dto/create.user.dto';
import { deleteUserDTO } from 'src/database/user-dto/delete.user.dto';
import { updateUserDTO } from 'src/database/user-dto/update.user.dto';
import { Auto } from 'src/database/entities/auto.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  addUser(user: createUserDTO) {
    return this.usersRepository.save({
      ...user,
      auto: [{ id: user.auto } as Auto],
    });
  }

  getUsers() {
    return this.usersRepository.find();
  }

  deleteUserFromDB(user: deleteUserDTO) {
    return this.usersRepository.delete(user);
  }

  updateUser(user: updateUserDTO) {
    return this.usersRepository.update(user.id, user);
  }

  usersWithoutAuto() {
    return this.usersRepository.find({ where: { auto: IsNull() } });
  }

  getUserAuto(id: number) {
    return this.usersRepository.find({
      where: { id },
      relations: { auto: true },
    });
  }
}
