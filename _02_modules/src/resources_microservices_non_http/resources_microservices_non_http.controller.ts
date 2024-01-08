import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ResourcesMicroservicesNonHttpService } from './resources_microservices_non_http.service';
import { CreateResourcesMicroservicesNonHttpDto } from './dto/create-resources_microservices_non_http.dto';
import { UpdateResourcesMicroservicesNonHttpDto } from './dto/update-resources_microservices_non_http.dto';

@Controller()
export class ResourcesMicroservicesNonHttpController {
  constructor(private readonly resourcesMicroservicesNonHttpService: ResourcesMicroservicesNonHttpService) {}

  @MessagePattern('createResourcesMicroservicesNonHttp')
  create(@Payload() createResourcesMicroservicesNonHttpDto: CreateResourcesMicroservicesNonHttpDto) {
    return this.resourcesMicroservicesNonHttpService.create(createResourcesMicroservicesNonHttpDto);
  }

  @MessagePattern('findAllResourcesMicroservicesNonHttp')
  findAll() {
    return this.resourcesMicroservicesNonHttpService.findAll();
  }

  @MessagePattern('findOneResourcesMicroservicesNonHttp')
  findOne(@Payload() id: number) {
    return this.resourcesMicroservicesNonHttpService.findOne(id);
  }

  @MessagePattern('updateResourcesMicroservicesNonHttp')
  update(@Payload() updateResourcesMicroservicesNonHttpDto: UpdateResourcesMicroservicesNonHttpDto) {
    return this.resourcesMicroservicesNonHttpService.update(updateResourcesMicroservicesNonHttpDto.id, updateResourcesMicroservicesNonHttpDto);
  }

  @MessagePattern('removeResourcesMicroservicesNonHttp')
  remove(@Payload() id: number) {
    return this.resourcesMicroservicesNonHttpService.remove(id);
  }
}
