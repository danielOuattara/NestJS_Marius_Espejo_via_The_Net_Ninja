import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesWebsocketsService } from './resources_websockets.service';

describe('ResourcesWebsocketsService', () => {
  let service: ResourcesWebsocketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesWebsocketsService],
    }).compile();

    service = module.get<ResourcesWebsocketsService>(ResourcesWebsocketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
