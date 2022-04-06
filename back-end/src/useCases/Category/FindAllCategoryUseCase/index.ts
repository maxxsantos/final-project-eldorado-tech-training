import { MysqlCategoryRepository } from '../../../api_db/repositories/implementation/mysqlCategoriesRepository';
import { DataSource } from 'typeorm';
import { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase';
import { FindAllCategoriesController } from './FindAllCategoriesController';


function getFindAllCategoriesController(connectionDB: DataSource) {
	const mysqlCategoryRepository = new MysqlCategoryRepository(connectionDB);
	const getCategoriesUseCase = new FindAllCategoriesUseCase(mysqlCategoryRepository);
	return new FindAllCategoriesController(getCategoriesUseCase);
}

export { getFindAllCategoriesController }