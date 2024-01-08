import { Module } from '@nestjs/common';
import { ResourcesWebsocketsService } from './resources_websockets.service';
import { ResourcesWebsocketsGateway } from './resources_websockets.gateway';

@Module({
  providers: [ResourcesWebsocketsGateway, ResourcesWebsocketsService],
})
export class ResourcesWebsocketsModule {}
