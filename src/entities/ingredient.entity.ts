import { FoodCategory } from '../enum/food-category.enum';
import {
  AfterLoad,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './recipe.entity';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Ingredient {
  @Field((type) => String, { nullable: false })
  @PrimaryGeneratedColumn()
  id: string;

  @Field((type) => String, { nullable: false })
  @Column({ nullable: false })
  name: string;

  @Field((type) => FoodCategory, { nullable: false })
  @Column({
    type: 'enum',
    enum: FoodCategory,
    nullable: false,
  })
  category: FoodCategory;

  @Field((type) => Boolean, { nullable: false })
  @Column({ type: 'bool', nullable: false })
  vegetarian: boolean;

  @Field((type) => String, { nullable: false })
  @Column({ type: 'bool', nullable: false })
  vegan: boolean;

  @OneToMany(() => Recipe, (recipe) => recipe.ingredients)
  recipes: Recipe[];
}

registerEnumType(FoodCategory, {
  name: 'FoodCategory',
});
