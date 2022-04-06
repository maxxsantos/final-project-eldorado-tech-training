import { DataSource } from 'typeorm';
import { MysqlCategoryRepository } from './../../../api_db/repositories/implementation/mysqlCategoriesRepository';
import { DeleteCategoryController } from './DeleteCategoryController';
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase';


function getDeleteCategoryController(connection: DataSource) {
	const mysqlCategoryRepository = new MysqlCategoryRepository(connection);
	const deleteCategoryUseCase = new DeleteCategoryUseCase(mysqlCategoryRepository);
	return new DeleteCategoryController(deleteCategoryUseCase);
}

export { getDeleteCategoryController }