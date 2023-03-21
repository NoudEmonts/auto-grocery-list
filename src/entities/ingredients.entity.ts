import { FoodGroup } from 'src/enums/food-category.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  category: FoodGroup;

  @Column()
  vegetarian: boolean;

  @OneToMany(() => Recipe, (recipe) => recipe.ingredients)
  recipes: Recipe[];
}
