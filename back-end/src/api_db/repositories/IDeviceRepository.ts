import { Device } from './../entities/Device';

export interface IDevice {
	save(category: Device): Promise<Device>;
	findAll(): Promise<Device[]>;
	findById(id: number): Promise<Device>;
	deleteById(id: number): Promise<void>;
	updateById(id: number, device: Device): Promise<Device>
}