import { IDeviceRepo } from './../../../api_db/repositories/IDeviceRepository';


export class DeleteDeviceUseCase {
	constructor(private deviceRepo: IDeviceRepo) { }

	async execute(id: number) {

		const getCategoryById = await this.deviceRepo.findById(id)

		if (getCategoryById){
			return await this.deviceRepo.deleteById(id)
		}

		throw new Error('Device Not Found.')
	}
}