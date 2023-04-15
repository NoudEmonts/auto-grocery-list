import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Ingredient } from 'src/entities/ingredient.entity';

@ObjectType()
export class Recipe {
  @Field((type) => String, { nullable: false })
  id: string;

  @Field((type) => String, { nullable: false })
  name: string;

  @Field((type) => String, { nullable: true })
  description: string;

  @Field((type) => [Ingredient], { nullable: false })
  ingredients: Ingredient[];

  @Field((type) => Int, { nullable: true })
  winterScore: number;

  @Field((type) => Int, { nullable: true })
  springScore: number;

  @Field((type) => Int, { nullable: true })
  summerScore: number;

  @Field((type) => Int, { nullable: true })
  fallScore: number;

  @Field((type) => Boolean, { nullable: false })
  vegetarian: boolean;

  @Field((type) => Boolean, { nullable: false })
  vegan: boolean;
}
