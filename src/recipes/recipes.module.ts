import { Module } from '@nestjs/common';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from 'src/entities/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  providers: [RecipesResolver, RecipesService],
  // exports: [RecipesService],
})
export class RecipesModule {}
