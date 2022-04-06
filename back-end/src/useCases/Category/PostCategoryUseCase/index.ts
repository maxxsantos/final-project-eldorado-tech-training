import { MysqlCategoryRepository } from './../../../api_db/repositories/implementation/mysqlCategoriesRepository';
import { DataSource } from "typeorm";
import { PostCategoryUseCase } from './PostCategoryUseCase';
import { PostCategoryController } from './PostCategoryController';


function getPostCategoryController(connection: DataSource) {
	const mysqlCategoryRepository = new MysqlCategoryRepository(connection);
	const postCategoryUseCase = new PostCategoryUseCase(mysqlCategoryRepository);
	return new PostCategoryController(postCategoryUseCase);
}

export { getPostCategoryController }