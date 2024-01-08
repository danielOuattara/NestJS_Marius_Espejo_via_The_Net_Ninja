import { PartialType } from '@nestjs/mapped-types';
import { CreateResourcesWebsocketDto } from './create-resources_websocket.dto';

export class UpdateResourcesWebsocketDto extends PartialType(CreateResourcesWebsocketDto) {
  id: number;
}
