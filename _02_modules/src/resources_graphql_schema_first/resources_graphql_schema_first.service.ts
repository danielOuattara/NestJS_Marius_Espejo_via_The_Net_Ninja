import { Injectable } from '@nestjs/common';
import { CreateResourcesGraphqlSchemaFirstInput } from './dto/create-resources_graphql_schema_first.input';
import { UpdateResourcesGraphqlSchemaFirstInput } from './dto/update-resources_graphql_schema_first.input';

@Injectable()
export class ResourcesGraphqlSchemaFirstService {
  create(createResourcesGraphqlSchemaFirstInput: CreateResourcesGraphqlSchemaFirstInput) {
    return 'This action adds a new resourcesGraphqlSchemaFirst';
  }

  findAll() {
    return `This action returns all resourcesGraphqlSchemaFirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resourcesGraphqlSchemaFirst`;
  }

  update(id: number, updateResourcesGraphqlSchemaFirstInput: UpdateResourcesGraphqlSchemaFirstInput) {
    return `This action updates a #${id} resourcesGraphqlSchemaFirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} resourcesGraphqlSchemaFirst`;
  }
}
