import { Module } from '@nestjs/common';
import { ResourcesGraphqlCodeFirstService } from './resources_graphql_code_first.service';
import { ResourcesGraphqlCodeFirstResolver } from './resources_graphql_code_first.resolver';

@Module({
  providers: [ResourcesGraphqlCodeFirstResolver, ResourcesGraphqlCodeFirstService],
})
export class ResourcesGraphqlCodeFirstModule {}
