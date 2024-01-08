import { PartialType } from '@nestjs/mapped-types';
import { CreateResourcesMicroservicesNonHttpDto } from './create-resources_microservices_non_http.dto';

export class UpdateResourcesMicroservicesNonHttpDto extends PartialType(CreateResourcesMicroservicesNonHttpDto) {
  id: number;
}
