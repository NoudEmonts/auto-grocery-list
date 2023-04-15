import { Module } from '@nestjs/common';
import { IngredientsResolver } from './ingredients.resolver';
import { IngredientsService } from './ingredients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from 'src/entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  providers: [IngredientsResolver, IngredientsService],
  exports: [IngredientsService],
})
export class IngredientsModule {}
