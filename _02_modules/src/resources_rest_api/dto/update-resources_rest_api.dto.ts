import { PartialType } from '@nestjs/mapped-types';
import { CreateResourcesRestApiDto } from './create-resources_rest_api.dto';

export class UpdateResourcesRestApiDto extends PartialType(CreateResourcesRestApiDto) {}
