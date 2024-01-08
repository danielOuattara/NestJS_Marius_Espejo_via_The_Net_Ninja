import { Injectable } from '@nestjs/common';
import { CreateResourcesRestApiDto } from './dto/create-resources_rest_api.dto';
import { UpdateResourcesRestApiDto } from './dto/update-resources_rest_api.dto';

@Injectable()
export class ResourcesRestApiService {
  create(createResourcesRestApiDto: CreateResourcesRestApiDto) {
    return 'This action adds a new resourcesRestApi';
  }

  findAll() {
    return `This action returns all resourcesRestApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourcesRestApi`;
  }

  update(id: number, updateResourcesRestApiDto: UpdateResourcesRestApiDto) {
    return `This action updates a #${id} resourcesRestApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourcesRestApi`;
  }
}
