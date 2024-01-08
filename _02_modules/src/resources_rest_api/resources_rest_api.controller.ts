import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourcesRestApiService } from './resources_rest_api.service';
import { CreateResourcesRestApiDto } from './dto/create-resources_rest_api.dto';
import { UpdateResourcesRestApiDto } from './dto/update-resources_rest_api.dto';

@Controller('resources-rest-api')
export class ResourcesRestApiController {
  constructor(private readonly resourcesRestApiService: ResourcesRestApiService) {}

  @Post()
  create(@Body() createResourcesRestApiDto: CreateResourcesRestApiDto) {
    return this.resourcesRestApiService.create(createResourcesRestApiDto);
  }

  @Get()
  findAll() {
    return this.resourcesRestApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourcesRestApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourcesRestApiDto: UpdateResourcesRestApiDto) {
    return this.resourcesRestApiService.update(+id, updateResourcesRestApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourcesRestApiService.remove(+id);
  }
}
