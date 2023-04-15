import {
  AfterInsert,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Recipe {
  @Field((type) => String, { nullable: false })
  @PrimaryGeneratedColumn()
  id: string;

  @Field((type) => String, { nullable: false })
  @Column({ nullable: false })
  name: string;

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field((type) => [Ingredient], { nullable: false })
  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipes)
  ingredients: Ingredient[];

  @Field((type) => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  winterScore: number;

  @Field((type) => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  springScore: number;

  @Field((type) => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  summerScore: number;

  @Field((type) => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  fallScore: number;

  @Field((type) => Boolean, { nullable: false })
  @Column({ type: 'bool', nullable: false })
  vegetarian: boolean;

  @Field((type) => Boolean, { nullable: false })
  @Column({ type: 'bool', nullable: false })
  vegan: boolean;

  @AfterInsert()
  @AfterUpdate()
  checkVegetarian(): void {
    this.vegetarian = this.ingredients.every(
      (ingredient) => ingredient.vegetarian,
    );
    this.vegan = this.ingredients.every((ingredient) => ingredient.vegan);
  }
}
