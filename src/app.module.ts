import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './datasource';
import { RecipesModule } from './recipes/recipes.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    RecipesModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
