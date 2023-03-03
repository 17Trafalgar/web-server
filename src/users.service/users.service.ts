import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/entities/users.entity';
import { IsNull, Repository } from 'typeorm';
import { createUserDTO } from 'src/database/users-dto/create.user.dto';
import { deleteUserDTO } from 'src/database/users-dto/delete.user.dto';
import { updateUserDTO } from 'src/database/users-dto/update.user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async addUser(user: createUserDTO): Promise<any> {
    return await this.usersRepository.save(user);
  }

  async getUsers(): Promise<any> {
    return await this.usersRepository.find();
  }

  async deleteUserFromDB(user: deleteUserDTO): Promise<any> {
    return await this.usersRepository.delete(user);
  }

  async updateUser(user: updateUserDTO): Promise<any> {
    return await this.usersRepository.update(user.id, { ...user });
  }

  async usersWithOutCar(): Promise<any> {
    return await this.usersRepository.find({ where: { auto: IsNull() } });
  }
}
