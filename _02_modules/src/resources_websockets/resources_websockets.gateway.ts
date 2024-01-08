import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ResourcesWebsocketsService } from './resources_websockets.service';
import { CreateResourcesWebsocketDto } from './dto/create-resources_websocket.dto';
import { UpdateResourcesWebsocketDto } from './dto/update-resources_websocket.dto';

@WebSocketGateway()
export class ResourcesWebsocketsGateway {
  constructor(private readonly resourcesWebsocketsService: ResourcesWebsocketsService) {}

  @SubscribeMessage('createResourcesWebsocket')
  create(@MessageBody() createResourcesWebsocketDto: CreateResourcesWebsocketDto) {
    return this.resourcesWebsocketsService.create(createResourcesWebsocketDto);
  }

  @SubscribeMessage('findAllResourcesWebsockets')
  findAll() {
    return this.resourcesWebsocketsService.findAll();
  }

  @SubscribeMessage('findOneResourcesWebsocket')
  findOne(@MessageBody() id: number) {
    return this.resourcesWebsocketsService.findOne(id);
  }

  @SubscribeMessage('updateResourcesWebsocket')
  update(@MessageBody() updateResourcesWebsocketDto: UpdateResourcesWebsocketDto) {
    return this.resourcesWebsocketsService.update(updateResourcesWebsocketDto.id, updateResourcesWebsocketDto);
  }

  @SubscribeMessage('removeResourcesWebsocket')
  remove(@MessageBody() id: number) {
    return this.resourcesWebsocketsService.remove(id);
  }
}
