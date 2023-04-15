import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/entities/recipe.entity';
import { EntityNotFoundError, Repository } from 'typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
  ) {}

  async getRecipeById(id: string): Promise<Recipe> {
    const recipe = this.recipeRepository.findOne({ where: { id: id } });

    if (!recipe) {
      throw new EntityNotFoundError(
        Recipe,
        `Could not find recipe with id ${id}`,
      );
    }
    return recipe;
  }
}
