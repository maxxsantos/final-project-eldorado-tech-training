import { IDeviceRepo } from '../../../../api_db/repositories/IDeviceRepository';

export class FindAllDevicesUseCase {
	constructor(private deviceRepo: IDeviceRepo) { }

	async execute() {
		const devices = await this.deviceRepo.findAll();
		if(devices) {
			return devices;
		}
		return [];
	}
}