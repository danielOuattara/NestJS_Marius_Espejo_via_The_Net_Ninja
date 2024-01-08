import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesGraphqlCodeFirstResolver } from './resources_graphql_code_first.resolver';
import { ResourcesGraphqlCodeFirstService } from './resources_graphql_code_first.service';

describe('ResourcesGraphqlCodeFirstResolver', () => {
  let resolver: ResourcesGraphqlCodeFirstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesGraphqlCodeFirstResolver, ResourcesGraphqlCodeFirstService],
    }).compile();

    resolver = module.get<ResourcesGraphqlCodeFirstResolver>(ResourcesGraphqlCodeFirstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
