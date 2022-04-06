import { Device } from './../entities/Device';
import { Category } from './../entities/Category';
import { DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
	type: "mysql",
	host: "api-db",
	port: 3306,
	username: "test",
	password: "test",
	database: "test",
	logging: true,
	synchronize: true,
	entities: [Category, Device],
	migrations: ['../migrations/**/*.ts'],
	
}