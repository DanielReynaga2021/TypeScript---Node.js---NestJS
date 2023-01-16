import { DataSource, DataSourceOptions } from "typeorm"
require('dotenv').config()

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: ['.src/Models/Entities/*{.js,.ts}'],
    migrations: ['./src/Migrations/*{.ts,.js}'],
    synchronize: false,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;