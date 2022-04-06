import { Request, Response } from "express";
import { PostDeviceUseCase } from "./PostDeviceUseCase";


export class PostDeviceController {
	constructor(private postDeviceUseCase: PostDeviceUseCase) {  }

	async handle(req: Request, res: Response): Promise<void> {
		const { color, partNumber, categoryId } = req.body;
		const category = { id: categoryId }

		if(!color && !partNumber && !categoryId) {
			res.status(400).send('Body is required');
		}

		try {
			const newDevice = await this.postDeviceUseCase.execute({color, partNumber, category } )
			res.status(200).send(newDevice);
		}
		catch(err) {
			res.status(400).send(err)
		}
	}
}