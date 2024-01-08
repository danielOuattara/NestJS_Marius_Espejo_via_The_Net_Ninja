import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesRestApiController } from './resources_rest_api.controller';
import { ResourcesRestApiService } from './resources_rest_api.service';

describe('ResourcesRestApiController', () => {
  let controller: ResourcesRestApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourcesRestApiController],
      providers: [ResourcesRestApiService],
    }).compile();

    controller = module.get<ResourcesRestApiController>(ResourcesRestApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
