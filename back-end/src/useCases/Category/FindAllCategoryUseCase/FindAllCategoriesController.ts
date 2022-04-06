import { Request, Response } from "express";
import { FindAllCategoriesUseCase } from "./FindAllCategoriesUseCase";

export class FindAllCategoriesController {
	constructor(private categoryUseCase: FindAllCategoriesUseCase) { }

	async handle(req: Request, res: Response): Promise<void> {
		try {
			const categories = await this.categoryUseCase.execute();
			res.status(200).send(categories);
		}
		catch (err) {
			res.status(500).send(err);
		}
	}
}