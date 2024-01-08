import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesRestApiService } from './resources_rest_api.service';

describe('ResourcesRestApiService', () => {
  let service: ResourcesRestApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesRestApiService],
    }).compile();

    service = module.get<ResourcesRestApiService>(ResourcesRestApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
