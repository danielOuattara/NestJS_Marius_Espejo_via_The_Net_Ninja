import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  findAllNinjas(@Query('type') type?: string) {
    return [{}, type];
  }
  @Get(':ninjaId')
  findNinja(@Param('ninjaId') ninjaId: string) {
    return { ninjaId };
  }
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      message: 'ninja created successfully',
      name: createNinjaDto.name,
      country: createNinjaDto.country,
    };
  }
  @Put(':ninjaId')
  updateNinja(
    @Param('ninjaId') ninjaId: string,
    @Body() updateNinjaDto: CreateNinjaDto,
  ) {
    return { ninjaId, ...updateNinjaDto };
  }
  @Patch(':ninjaId')
  patchNinja(@Param('ninjaId') ninjaId: string) {
    return { ninjaId };
  }
  @Delete(':ninjaId')
  deleteNinja(@Param('ninjaId') ninjaId: string) {
    return { ninjaId };
  }
}
