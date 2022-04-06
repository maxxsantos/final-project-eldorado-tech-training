import { DeleteResult } from 'typeorm';
import { Device } from './../entities/Device';

export interface IDeviceRepo {
	save(device: Device): Promise<Device>;
	findAll(): Promise<Device[]>;
	findById(id: number): Promise<Device>;
	deleteById(id: number): Promise<DeleteResult>;
	updateById(device: Device): Promise<Device>
}