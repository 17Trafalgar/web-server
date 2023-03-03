import { Body, Controller, Post, Res, Get, Delete, Put } from '@nestjs/common';
import { AutoService } from './auto.service';
import { createAutoDTO } from 'src/database/auto-dto/create.auto.dto';
import { updateAutoDTO } from 'src/database/auto-dto/update.auto.dto';
import { deleteAutoDTO } from 'src/database/auto-dto/delete.auto.dto';

@Controller('auto')
export class AutoController {
  constructor(private AutoService: AutoService) {}

  @Post()
  async createUser(@Body() body: createAutoDTO, @Res() res) {
    try {
      console.log(body);
      const result = await this.AutoService.addAuto(body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Get()
  async listUsers(@Res() res) {
    try {
      const result = await this.AutoService.getAutos();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Delete()
  async deleteUser(@Body() body: deleteAutoDTO, @Res() res) {
    try {
      const result = await this.AutoService.deleteAutoFromDB(body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Put()
  async updateUser(@Body() body: updateAutoDTO, @Res() res) {
    try {
      const result = await this.AutoService.updateAuto(body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Get('/user')
  async usersWithOutCar(@Res() res) {
    try {
      const result = await this.AutoService.autoWithoutOwner();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }
}
