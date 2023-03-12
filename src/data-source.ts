import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: "postgres",
    synchronize: false,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})