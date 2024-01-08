import { CreateResourcesGraphqlCodeFirstInput } from './create-resources_graphql_code_first.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResourcesGraphqlCodeFirstInput extends PartialType(CreateResourcesGraphqlCodeFirstInput) {
  @Field(() => Int)
  id: number;
}
