import { IPostCategoryRequestDTO } from './PostCategoryDTO';
import { ICategoryRepo } from "../../../api_db/repositories/ICategoryRepository";


export class PostCategoryUseCase {
	constructor (private categoryRepo: ICategoryRepo) { }

	async execute(postCategoryDTO: IPostCategoryRequestDTO) {
		return await this.categoryRepo.save(postCategoryDTO);
	}
}