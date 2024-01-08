import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ResourcesGraphqlCodeFirst {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
