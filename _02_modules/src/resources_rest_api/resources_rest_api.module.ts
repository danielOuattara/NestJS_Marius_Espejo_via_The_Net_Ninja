import { Module } from '@nestjs/common';
import { ResourcesRestApiService } from './resources_rest_api.service';
import { ResourcesRestApiController } from './resources_rest_api.controller';

@Module({
  controllers: [ResourcesRestApiController],
  providers: [ResourcesRestApiService],
})
export class ResourcesRestApiModule {}
