import { MigrationInterface, QueryRunner } from "typeorm";

export class InitializeDb1681578839803 implements MigrationInterface {
    name = 'InitializeDb1681578839803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "winterScore" integer NOT NULL, "springScore" integer NOT NULL, "summerScore" integer NOT NULL, "fallScore" integer NOT NULL, "vegetarian" boolean NOT NULL, "vegan" boolean NOT NULL, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" "public"."ingredient_category_enum" NOT NULL, "vegetarian" boolean NOT NULL, "vegan" boolean NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ingredient"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
    }

}
