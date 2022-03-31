import { Category } from './../entities/Category';

export interface ICategory {
	save(category: Category): Promise<Category>;
	findAll(): Promise<Category[]>;
	findById(id: number): Promise<Category>;
	deleteById(id: number): Promise<void>;
	updateById(id: number, category: Category): Promise<Category>
}