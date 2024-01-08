import { Module } from '@nestjs/common';
import { ResourcesGraphqlSchemaFirstService } from './resources_graphql_schema_first.service';
import { ResourcesGraphqlSchemaFirstResolver } from './resources_graphql_schema_first.resolver';

@Module({
  providers: [ResourcesGraphqlSchemaFirstResolver, ResourcesGraphqlSchemaFirstService],
})
export class ResourcesGraphqlSchemaFirstModule {}
