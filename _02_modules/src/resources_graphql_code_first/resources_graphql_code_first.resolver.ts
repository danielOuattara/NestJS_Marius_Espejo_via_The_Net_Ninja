import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResourcesGraphqlCodeFirstService } from './resources_graphql_code_first.service';
import { ResourcesGraphqlCodeFirst } from './entities/resources_graphql_code_first.entity';
import { CreateResourcesGraphqlCodeFirstInput } from './dto/create-resources_graphql_code_first.input';
import { UpdateResourcesGraphqlCodeFirstInput } from './dto/update-resources_graphql_code_first.input';

@Resolver(() => ResourcesGraphqlCodeFirst)
export class ResourcesGraphqlCodeFirstResolver {
  constructor(private readonly resourcesGraphqlCodeFirstService: ResourcesGraphqlCodeFirstService) {}

  @Mutation(() => ResourcesGraphqlCodeFirst)
  createResourcesGraphqlCodeFirst(@Args('createResourcesGraphqlCodeFirstInput') createResourcesGraphqlCodeFirstInput: CreateResourcesGraphqlCodeFirstInput) {
    return this.resourcesGraphqlCodeFirstService.create(createResourcesGraphqlCodeFirstInput);
  }

  @Query(() => [ResourcesGraphqlCodeFirst], { name: 'resourcesGraphqlCodeFirst' })
  findAll() {
    return this.resourcesGraphqlCodeFirstService.findAll();
  }

  @Query(() => ResourcesGraphqlCodeFirst, { name: 'resourcesGraphqlCodeFirst' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.resourcesGraphqlCodeFirstService.findOne(id);
  }

  @Mutation(() => ResourcesGraphqlCodeFirst)
  updateResourcesGraphqlCodeFirst(@Args('updateResourcesGraphqlCodeFirstInput') updateResourcesGraphqlCodeFirstInput: UpdateResourcesGraphqlCodeFirstInput) {
    return this.resourcesGraphqlCodeFirstService.update(updateResourcesGraphqlCodeFirstInput.id, updateResourcesGraphqlCodeFirstInput);
  }

  @Mutation(() => ResourcesGraphqlCodeFirst)
  removeResourcesGraphqlCodeFirst(@Args('id', { type: () => Int }) id: number) {
    return this.resourcesGraphqlCodeFirstService.remove(id);
  }
}
