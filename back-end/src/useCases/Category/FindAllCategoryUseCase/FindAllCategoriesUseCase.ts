import { ICategoryRepo } from "../../../api_db/repositories/ICategoryRepository";



export class FindAllCategoriesUseCase {
	constructor(private categoryRepo: ICategoryRepo) { }

	async execute() {
		const categories = await this.categoryRepo.findAll();
		if(categories) {
			console.log(categories);
			
			return categories;
		}
		return [];
	}
}