import { Device } from './../../entities/Device';
import { IDeviceRepo } from './../IDeviceRepository';
import { DataSource, DeleteResult, Repository } from "typeorm";

export class MysqlDeviceRepository implements IDeviceRepo {
	private device: Repository<Device>;
	constructor(connection: DataSource) {
		this.device = connection.getRepository(Device);
	}

	save(device: Device): Promise<Device> {
		const newdevice = this.device.create(device);
		return this.device.save(newdevice);
	}

	findAll(): Promise<Device[]> {
		return this.device.find();
	}

	findById(id: number): Promise<Device> {
		return this.device.findOne({ where: { id: id } }); 
	}

	deleteById(id: number): Promise<DeleteResult> {
		return this.device.delete({ id })
	}
	
	updateById(device: Device): Promise<Device> {
		return this.device.save(device)

	}
}