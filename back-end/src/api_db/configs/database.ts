import { DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
	type: "mysql",
	host: "localhost",
	port: 3336,
	username: "test",
	password: "test",
	database: "test",
	entities: [],
	logging: true,
	synchronize: true,
}