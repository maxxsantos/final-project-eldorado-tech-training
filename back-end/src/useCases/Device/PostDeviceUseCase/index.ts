import { MysqlDeviceRepository } from './../../../api_db/repositories/implementation/mysqlDeviceRepository';
import { DataSource } from "typeorm";
import { PostDeviceUseCase } from './PostDeviceUseCase';
import { PostDeviceController } from './PostDeviceController';


function getPostDeviceController(connection: DataSource) {
	const mysqlDeviceRepository = new MysqlDeviceRepository(connection);
	const postDeviceUseCase = new PostDeviceUseCase(mysqlDeviceRepository);
	return new PostDeviceController(postDeviceUseCase);
}

export { getPostDeviceController }