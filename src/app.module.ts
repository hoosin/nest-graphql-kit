import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DirectiveLocation, GraphQLDirective } from 'graphql'
import { upperDirectiveTransformer } from './common/directives/upper-case.directive'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import {
  ClickHouseConnectionProtocol,
  ClickHouseModule,
} from '@depyronick/nestjs-clickhouse'
import { RecipesModule } from './api/iot/recipes.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClickHouseModule.register([
      {
        name: process.env.NAME,
        host: process.env.HOST,
        port: parseInt(process.env.PORT),
        username: process.env.USERNAME,
        database: process.env.DATABASE,
        protocol: ClickHouseConnectionProtocol.HTTP,
      },
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
    RecipesModule,
  ],
})
export class AppModule {}
