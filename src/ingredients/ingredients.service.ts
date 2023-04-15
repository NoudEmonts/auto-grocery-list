import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from 'src/entities/ingredient.entity';
import { EntityNotFoundError, Repository } from 'typeorm';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientsRepository: Repository<Ingredient>,
  ) {}

  async getIngredientById(id: string): Promise<Ingredient> {
    const recipe = this.ingredientsRepository.findOne({ where: { id: id } });

    if (!recipe) {
      throw new EntityNotFoundError(
        Ingredient,
        `Could not find ingredient with id ${id}`,
      );
    }
    return recipe;
  }
}
