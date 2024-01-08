import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateResourcesGraphqlCodeFirstInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
