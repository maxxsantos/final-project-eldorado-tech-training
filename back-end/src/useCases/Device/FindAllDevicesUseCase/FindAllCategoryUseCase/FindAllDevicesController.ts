import { Request, Response } from "express";
import { FindAllDevicesUseCase } from "./FindAllDevicesUseCase";

export class FindAllDevicesController {
	constructor(private deviceUseCase: FindAllDevicesUseCase) { }

	async handle(req: Request, res: Response): Promise<void> {
		try {
			const devices = await this.deviceUseCase.execute();
			res.status(200).send(devices);
		}
		catch (err) {
			res.status(500).send(err);
		}
	}
}