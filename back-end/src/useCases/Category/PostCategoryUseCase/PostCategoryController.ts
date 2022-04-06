import { Request, Response } from "express";
import { PostCategoryUseCase } from "./PostCategoryUseCase";


export class PostCategoryController {
	constructor(private postCategoryUseCase: PostCategoryUseCase) {  }

	async handle(req: Request, res: Response): Promise<void> {
		const { name } = req.body;

		if(!name) {
			res.status(400).send('Name is required');
		}

		try {
			const newCategory = await this.postCategoryUseCase.execute({ name });
			res.status(200).send(newCategory);
		}
		catch(err) {
			res.status(400).send(err)
		}
	}
}