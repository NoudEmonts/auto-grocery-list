import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { Ingredient } from './entities/ingredients.entity';
import { Recipe } from './entities/recipe.entity';

config({ path: '.env' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [Ingredient, Recipe],
  subscribers: [],
  migrations: [__dirname + process.env.TYPEORM_MIGRATIONS],
  migrationsRun: process.env.TYPEORM_RUN_MIGRATIONS === 'true' ? true : false,
};

console.log(__dirname + process.env.TYPEORM_MIGRATIONS);

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
