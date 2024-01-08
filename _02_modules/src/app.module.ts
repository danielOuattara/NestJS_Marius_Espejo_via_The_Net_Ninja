import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { ResourcesRestApiModule } from './resources_rest_api/resources_rest_api.module';
import { ResourcesGraphqlCodeFirstModule } from './resources_graphql_code_first/resources_graphql_code_first.module';
import { ResourcesGraphqlSchemaFirstModule } from './resources_graphql_schema_first/resources_graphql_schema_first.module';
import { ResourcesMicroservicesNonHttpModule } from './resources_microservices_non_http/resources_microservices_non_http.module';
import { ResourcesWebsocketsModule } from './resources_websockets/resources_websockets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NinjasModule, ResourcesRestApiModule, ResourcesGraphqlCodeFirstModule, ResourcesGraphqlSchemaFirstModule, ResourcesMicroservicesNonHttpModule, ResourcesWebsocketsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
