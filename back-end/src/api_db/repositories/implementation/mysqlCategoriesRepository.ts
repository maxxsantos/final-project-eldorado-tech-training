import { Category } from './../../entities/Category';
import { DataSource, DeleteResult, Repository } from "typeorm";
import { ICategoryRepo } from "../ICategoryRepository";

export class MysqlCategoryRepository implements ICategoryRepo {
	private category: Repository<Category>;
	constructor(connection: DataSource) {
		this.category = connection.getRepository(Category);
	}

	save(category: Category): Promise<Category> {
		const newCategory = this.category.create(category);
		return this.category.save(newCategory);
	}

	findAll(): Promise<Category[]> {
		return this.category.find({
			relations: ['devices']
		});
	}

	findById(id: number): Promise<Category> {
		return this.category.findOne({ where: { id: id } }); 
	}

	deleteById(id: number): Promise<DeleteResult> {
		return this.category.delete({ id })
	}
	
	updateById(category: Category): Promise<Category> {
		return this.category.save(category)
	}
}