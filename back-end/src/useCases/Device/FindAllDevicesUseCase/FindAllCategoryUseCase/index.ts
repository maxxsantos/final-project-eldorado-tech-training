import { MysqlDeviceRepository } from './../../../../api_db/repositories/implementation/mysqlDeviceRepository';
import { DataSource } from 'typeorm';
import { FindAllDevicesUseCase } from './FindAllDevicesUseCase';
import { FindAllDevicesController } from './FindAllDevicesController';


function getFindAllDevicesController(connectionDB: DataSource) {
	const mysqlDeviceRepository = new MysqlDeviceRepository(connectionDB);
	const getDevicesUseCase = new FindAllDevicesUseCase(mysqlDeviceRepository);
	return new FindAllDevicesController(getDevicesUseCase);
}

export { getFindAllDevicesController }