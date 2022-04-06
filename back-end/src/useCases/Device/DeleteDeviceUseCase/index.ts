import { MysqlDeviceRepository } from './../../../api_db/repositories/implementation/mysqlDeviceRepository';
import { DataSource } from 'typeorm';
import { DeleteDeviceUseCase } from './DeleteCategoryUseCase';
import { DeleteDeviceController } from './DeleteCategoryController';

function getDeleteDeviceController(connection: DataSource) {
	const mysqlDeviceRepository = new MysqlDeviceRepository(connection);
	const deleteDeviceUseCase = new DeleteDeviceUseCase(mysqlDeviceRepository);
	return new DeleteDeviceController(deleteDeviceUseCase);
}

export { getDeleteDeviceController }