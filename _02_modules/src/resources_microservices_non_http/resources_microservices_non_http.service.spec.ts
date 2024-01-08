import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesMicroservicesNonHttpService } from './resources_microservices_non_http.service';

describe('ResourcesMicroservicesNonHttpService', () => {
  let service: ResourcesMicroservicesNonHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesMicroservicesNonHttpService],
    }).compile();

    service = module.get<ResourcesMicroservicesNonHttpService>(ResourcesMicroservicesNonHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
