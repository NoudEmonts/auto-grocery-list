import { Args, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe } from 'src/entities/recipe.entity';

@Resolver()
export class RecipesResolver {
  constructor(private recipesService: RecipesService) {}

  @Query((returns) => Recipe)
  public async recipe(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Recipe> {
    return await this.recipesService.getRecipeById(id);
  }
}
