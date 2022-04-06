import { Request, Response } from "express";
import {  DeleteDeviceUseCase } from "./DeleteCategoryUseCase";

export class DeleteDeviceController {
	constructor(private deleteDeviceUseCase: DeleteDeviceUseCase) { }

	async handle(req: Request, res: Response): Promise<void> {
		const { deviceId } = req.params
		
		if (!deviceId) {
			res.status(400).send('DeviceId is required');
		} else {
			try {
				await this.deleteDeviceUseCase.execute(Number.parseInt(deviceId));
				res.status(200).send();
			}
			catch(err) {
				res.status(404).send(err);
			}
		}
	}
}