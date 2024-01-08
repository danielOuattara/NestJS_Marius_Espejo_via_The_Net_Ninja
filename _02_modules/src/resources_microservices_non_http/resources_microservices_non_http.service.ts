import { Injectable } from '@nestjs/common';
import { CreateResourcesMicroservicesNonHttpDto } from './dto/create-resources_microservices_non_http.dto';
import { UpdateResourcesMicroservicesNonHttpDto } from './dto/update-resources_microservices_non_http.dto';

@Injectable()
export class ResourcesMicroservicesNonHttpService {
  create(createResourcesMicroservicesNonHttpDto: CreateResourcesMicroservicesNonHttpDto) {
    return 'This action adds a new resourcesMicroservicesNonHttp';
  }

  findAll() {
    return `This action returns all resourcesMicroservicesNonHttp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourcesMicroservicesNonHttp`;
  }

  update(id: number, updateResourcesMicroservicesNonHttpDto: UpdateResourcesMicroservicesNonHttpDto) {
    return `This action updates a #${id} resourcesMicroservicesNonHttp`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourcesMicroservicesNonHttp`;
  }
}
