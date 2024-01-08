import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesWebsocketsGateway } from './resources_websockets.gateway';
import { ResourcesWebsocketsService } from './resources_websockets.service';

describe('ResourcesWebsocketsGateway', () => {
  let gateway: ResourcesWebsocketsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesWebsocketsGateway, ResourcesWebsocketsService],
    }).compile();

    gateway = module.get<ResourcesWebsocketsGateway>(ResourcesWebsocketsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
