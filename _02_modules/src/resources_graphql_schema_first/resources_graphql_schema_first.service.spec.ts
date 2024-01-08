import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesGraphqlSchemaFirstService } from './resources_graphql_schema_first.service';

describe('ResourcesGraphqlSchemaFirstService', () => {
  let service: ResourcesGraphqlSchemaFirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesGraphqlSchemaFirstService],
    }).compile();

    service = module.get<ResourcesGraphqlSchemaFirstService>(ResourcesGraphqlSchemaFirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
