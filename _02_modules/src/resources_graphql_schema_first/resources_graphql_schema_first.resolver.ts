import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ResourcesGraphqlSchemaFirstService } from './resources_graphql_schema_first.service';
import { CreateResourcesGraphqlSchemaFirstInput } from './dto/create-resources_graphql_schema_first.input';
import { UpdateResourcesGraphqlSchemaFirstInput } from './dto/update-resources_graphql_schema_first.input';

@Resolver('ResourcesGraphqlSchemaFirst')
export class ResourcesGraphqlSchemaFirstResolver {
  constructor(private readonly resourcesGraphqlSchemaFirstService: ResourcesGraphqlSchemaFirstService) {}

  @Mutation('createResourcesGraphqlSchemaFirst')
  create(@Args('createResourcesGraphqlSchemaFirstInput') createResourcesGraphqlSchemaFirstInput: CreateResourcesGraphqlSchemaFirstInput) {
    return this.resourcesGraphqlSchemaFirstService.create(createResourcesGraphqlSchemaFirstInput);
  }

  @Query('resourcesGraphqlSchemaFirst')
  findAll() {
    return this.resourcesGraphqlSchemaFirstService.findAll();
  }

  @Query('resourcesGraphqlSchemaFirst')
  findOne(@Args('id') id: number) {
    return this.resourcesGraphqlSchemaFirstService.findOne(id);
  }

  @Mutation('updateResourcesGraphqlSchemaFirst')
  update(@Args('updateResourcesGraphqlSchemaFirstInput') updateResourcesGraphqlSchemaFirstInput: UpdateResourcesGraphqlSchemaFirstInput) {
    return this.resourcesGraphqlSchemaFirstService.update(updateResourcesGraphqlSchemaFirstInput.id, updateResourcesGraphqlSchemaFirstInput);
  }

  @Mutation('removeResourcesGraphqlSchemaFirst')
  remove(@Args('id') id: number) {
    return this.resourcesGraphqlSchemaFirstService.remove(id);
  }
}
