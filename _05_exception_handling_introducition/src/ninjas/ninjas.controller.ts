import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
// import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  findAllNinjas(@Query('weapon') weapon?: string) {
    try {
      return this.ninjasService.findAllNinjas(weapon);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Get(':ninjaId')
  findNinja(@Param('ninjaId') ninjaId: string) {
    try {
      return this.ninjasService.findNinja(ninjaId);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  createNinja(@Body() data: CreateNinjaDto) {
    this.ninjasService.createNinja(data);
    return {
      message: 'ninja created successfully',
      ninjas: this.ninjasService.findAllNinjas(),
    };
  }

  @Put(':ninjaId')
  updateNinja(@Param('ninjaId') ninjaId: string, @Body() data: CreateNinjaDto) {
    this.ninjasService.updateNinja(ninjaId, data);
    return {
      message: 'ninja updated successfully',
      ninjas: this.ninjasService.findAllNinjas(),
    };
  }

  @Patch(':ninjaId')
  patchNinja(@Param('ninjaId') ninjaId: string, @Body() data: CreateNinjaDto) {
    this.ninjasService.updateNinja(ninjaId, data);
    return {
      message: 'ninja patched successfully',
      ninjas: this.ninjasService.findAllNinjas(),
    };
  }

  @Delete(':ninjaId')
  deleteNinja(@Param('ninjaId') ninjaId: string) {
    this.ninjasService.deleteNinja(ninjaId);
    return {
      message: 'ninja deleted successfully',
      ninjas: this.ninjasService.findAllNinjas(),
    };
  }
}
