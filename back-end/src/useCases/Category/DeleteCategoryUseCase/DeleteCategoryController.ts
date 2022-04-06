import { Request, Response } from "express";
import { isNumber } from "util";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

export class DeleteCategoryController {
	constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) { }

	async handle(req: Request, res: Response): Promise<void> {
		const { categoryId } = req.params
		
		if (!categoryId) {
			res.status(400).send('CategoryId is required');
		} else {
			try {
				await this.deleteCategoryUseCase.execute(Number.parseInt(categoryId));
				res.status(200).send();
			}
			catch(err) {
				res.status(404).send(err);
			}
		}
	}
}