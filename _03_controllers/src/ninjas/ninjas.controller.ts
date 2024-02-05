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
import { PatchNinjaDto } from './dto/patch-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  findAllNinjas(
    @Query('type') type?: string,
    @Query('weapon') weapon?: string,
  ) {
    return [{}, type, weapon];
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
  patchNinja(
    @Param('ninjaId') ninjaId: string,
    @Body() patchNinjaDto: PatchNinjaDto,
  ) {
    return { ninjaId, ...patchNinjaDto };
  }

  @Delete(':ninjaId')
  deleteNinja(@Param('ninjaId') ninjaId: string) {
    return { ninjaId };
  }
}
