import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesGraphqlSchemaFirstResolver } from './resources_graphql_schema_first.resolver';
import { ResourcesGraphqlSchemaFirstService } from './resources_graphql_schema_first.service';

describe('ResourcesGraphqlSchemaFirstResolver', () => {
  let resolver: ResourcesGraphqlSchemaFirstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesGraphqlSchemaFirstResolver, ResourcesGraphqlSchemaFirstService],
    }).compile();

    resolver = module.get<ResourcesGraphqlSchemaFirstResolver>(ResourcesGraphqlSchemaFirstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
