import { Body, Controller, Post, Res, Get, Delete, Put } from '@nestjs/common';
import { UsersService } from './user.service';
import { createUserDTO } from '../database/user-dto/create.user.dto';
import { deleteUserDTO } from 'src/database/user-dto/delete.user.dto';
import { updateUserDTO } from 'src/database/user-dto/update.user.dto';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post()
  async createUser(@Body() body: createUserDTO, @Res() res) {
    try {
      const result = await this.UsersService.addUser(body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Get()
  async listUsers(@Res() res) {
    try {
      const result = await this.UsersService.getUsers();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Delete()
  async deleteUser(@Body() body: deleteUserDTO, @Res() res) {
    try {
      const result = await this.UsersService.deleteUserFromDB(body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Put()
  async updateUser(@Body() body: updateUserDTO, @Res() res) {
    try {
      const result = await this.UsersService.updateUser(body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Get('/user')
  async usersWithOutCar(@Res() res) {
    try {
      const result = await this.UsersService.usersWithoutAuto();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }
}
