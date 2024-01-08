import { Injectable } from '@nestjs/common';
import { CreateResourcesWebsocketDto } from './dto/create-resources_websocket.dto';
import { UpdateResourcesWebsocketDto } from './dto/update-resources_websocket.dto';

@Injectable()
export class ResourcesWebsocketsService {
  create(createResourcesWebsocketDto: CreateResourcesWebsocketDto) {
    return 'This action adds a new resourcesWebsocket';
  }

  findAll() {
    return `This action returns all resourcesWebsockets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourcesWebsocket`;
  }

  update(id: number, updateResourcesWebsocketDto: UpdateResourcesWebsocketDto) {
    return `This action updates a #${id} resourcesWebsocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourcesWebsocket`;
  }
}
