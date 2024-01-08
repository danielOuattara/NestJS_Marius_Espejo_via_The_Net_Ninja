import { Injectable } from '@nestjs/common';
import { CreateResourcesGraphqlCodeFirstInput } from './dto/create-resources_graphql_code_first.input';
import { UpdateResourcesGraphqlCodeFirstInput } from './dto/update-resources_graphql_code_first.input';

@Injectable()
export class ResourcesGraphqlCodeFirstService {
  create(createResourcesGraphqlCodeFirstInput: CreateResourcesGraphqlCodeFirstInput) {
    return 'This action adds a new resourcesGraphqlCodeFirst';
  }

  findAll() {
    return `This action returns all resourcesGraphqlCodeFirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourcesGraphqlCodeFirst`;
  }

  update(id: number, updateResourcesGraphqlCodeFirstInput: UpdateResourcesGraphqlCodeFirstInput) {
    return `This action updates a #${id} resourcesGraphqlCodeFirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourcesGraphqlCodeFirst`;
  }
}
