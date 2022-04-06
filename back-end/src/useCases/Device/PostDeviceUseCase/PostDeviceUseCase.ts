import { IDeviceRepo } from './../../../api_db/repositories/IDeviceRepository';
import { IPostDeviceRequestDTO } from './PostDeviceDTO';


export class PostDeviceUseCase {
	constructor (private deviceRepo: IDeviceRepo) { }

	async execute(postDeviceDTO: IPostDeviceRequestDTO) {
		return await this.deviceRepo.save(postDeviceDTO);
	}
}