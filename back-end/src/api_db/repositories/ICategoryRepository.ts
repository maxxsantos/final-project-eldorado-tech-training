import { DeleteResult } from 'typeorm';
import { Category } from './../entities/Category';

export interface ICategoryRepo {
	save(category: Category): Promise<Category>;
	findAll(): Promise<Category[]>;
	findById(id: number): Promise<Category>;
	deleteById(id: number): Promise<DeleteResult>;
	updateById(category: Category): Promise<Category>
}