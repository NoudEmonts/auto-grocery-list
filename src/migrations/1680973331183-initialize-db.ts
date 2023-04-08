import { MigrationInterface, QueryRunner } from "typeorm";

export class InitializeDb1680973331183 implements MigrationInterface {
    name = 'InitializeDb1680973331183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "winter_score" integer NOT NULL, "spring_score" integer NOT NULL, "summer_score" integer NOT NULL, "fall_score" integer NOT NULL, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."ingredient_category_enum" AS ENUM('Fruit', 'Vegetables and beans', 'Grain', 'Dairy', 'Proteins')`);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" "public"."ingredient_category_enum" NOT NULL, "vegetarian" boolean NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ingredient"`);
        await queryRunner.query(`DROP TYPE "public"."ingredient_category_enum"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
    }

}
