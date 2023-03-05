import { Body, Controller, Post, Res, Get, Delete, Put } from '@nestjs/common';
import { AutoService } from './auto.service';
import { createAutoDTO } from 'src/database/auto-dto/create.auto.dto';
import { updateAutoDTO } from 'src/database/auto-dto/update.auto.dto';
import { deleteAutoDTO } from 'src/database/auto-dto/delete.auto.dto';

@Controller('auto')
export class AutoController {
  constructor(private AutoService: AutoService) {}

  @Post()
  async createAuto(@Body() body: createAutoDTO, @Res() res) {
    try {
      console.log(body);
      const result = await this.AutoService.addCar(body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Get()
  async listAuto(@Res() res) {
    try {
      const result = await this.AutoService.getCars();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Delete()
  async deleteAutoFromDB(@Body() body: deleteAutoDTO, @Res() res) {
    try {
      const result = await this.AutoService.deleteCarFromDB(body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Put()
  async updateAuto(@Body() body: updateAutoDTO, @Res() res) {
    try {
      const result = await this.AutoService.updateCar(body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }

  @Get('/car')
  async autosWithoutOwner(@Res() res) {
    try {
      const result = await this.AutoService.carWithoutOwner();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request' });
    }
  }
}
