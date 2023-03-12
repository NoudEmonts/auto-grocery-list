import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './ingredients.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipes)
  ingredients: Ingredient[];

  @Column()
  winter_score: number;

  @Column()
  spring_score: number;

  @Column()
  summer_score: number;

  @Column()
  fall_score: number;
}
