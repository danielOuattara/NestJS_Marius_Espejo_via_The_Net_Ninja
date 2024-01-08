import { CreateResourcesGraphqlSchemaFirstInput } from './create-resources_graphql_schema_first.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateResourcesGraphqlSchemaFirstInput extends PartialType(CreateResourcesGraphqlSchemaFirstInput) {
  id: number;
}
