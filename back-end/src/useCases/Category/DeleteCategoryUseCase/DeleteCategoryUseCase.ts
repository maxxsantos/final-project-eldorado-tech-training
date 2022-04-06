import { ICategoryRepo } from "../../../api_db/repositories/ICategoryRepository";


export class DeleteCategoryUseCase {
	constructor(private categoryRepo: ICategoryRepo) { }

	async execute(id: number) {

		const getCategoryById = await this.categoryRepo.findById(id)

		if (getCategoryById){
			return await this.categoryRepo.deleteById(id)
		}

		throw new Error('Category Not Found.')
	}
}