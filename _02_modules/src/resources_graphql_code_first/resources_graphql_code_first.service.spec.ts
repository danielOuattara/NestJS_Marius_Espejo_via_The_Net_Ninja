import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesGraphqlCodeFirstService } from './resources_graphql_code_first.service';

describe('ResourcesGraphqlCodeFirstService', () => {
  let service: ResourcesGraphqlCodeFirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesGraphqlCodeFirstService],
    }).compile();

    service = module.get<ResourcesGraphqlCodeFirstService>(ResourcesGraphqlCodeFirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
