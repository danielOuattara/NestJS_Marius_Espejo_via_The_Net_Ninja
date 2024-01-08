import { Module } from '@nestjs/common';
import { ResourcesMicroservicesNonHttpService } from './resources_microservices_non_http.service';
import { ResourcesMicroservicesNonHttpController } from './resources_microservices_non_http.controller';

@Module({
  controllers: [ResourcesMicroservicesNonHttpController],
  providers: [ResourcesMicroservicesNonHttpService],
})
export class ResourcesMicroservicesNonHttpModule {}
