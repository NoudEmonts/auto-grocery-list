import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './data-source';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), RecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
