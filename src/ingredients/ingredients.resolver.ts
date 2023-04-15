import { Args, Query, Resolver } from '@nestjs/graphql';
import { Ingredient } from 'src/entities/ingredient.entity';
import { IngredientsService } from './ingredients.service';

@Resolver()
export class IngredientsResolver {
  constructor(private ingredientsService: IngredientsService) {}

  @Query((returns) => Ingredient)
  async ingredient(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Ingredient> {
    return await this.ingredientsService.getIngredientById(id);
  }
}
