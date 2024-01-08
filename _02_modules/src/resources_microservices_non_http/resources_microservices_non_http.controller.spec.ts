import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesMicroservicesNonHttpController } from './resources_microservices_non_http.controller';
import { ResourcesMicroservicesNonHttpService } from './resources_microservices_non_http.service';

describe('ResourcesMicroservicesNonHttpController', () => {
  let controller: ResourcesMicroservicesNonHttpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourcesMicroservicesNonHttpController],
      providers: [ResourcesMicroservicesNonHttpService],
    }).compile();

    controller = module.get<ResourcesMicroservicesNonHttpController>(ResourcesMicroservicesNonHttpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
