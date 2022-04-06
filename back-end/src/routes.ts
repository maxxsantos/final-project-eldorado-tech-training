import { DataSource } from 'typeorm';
import { Request, Response, Router } from "express";
import { getFindAllCategoriesController } from './useCases/Category/FindAllCategoryUseCase';
import { getPostCategoryController } from './useCases/Category/PostCategoryUseCase';
import { getDeleteCategoryController } from './useCases/Category/DeleteCategoryUseCase';
import { getFindAllDevicesController } from './useCases/Device/FindAllDevicesUseCase/FindAllCategoryUseCase';
import { getPostDeviceController } from './useCases/Device/PostDeviceUseCase';
import { getDeleteDeviceController } from './useCases/Device/DeleteDeviceUseCase';


function getAPIRouter(connectionDB: DataSource) {
	const router = Router();

	//----------------- CATEGORY--------------------- //

	router.get('/categories', (req: Request, res: Response) => {
		getFindAllCategoriesController(connectionDB).handle(req, res);
	});

	// router.get('/categories/:categoryId', (req, res) => {
		
	// });

	router.post('/categories', (req, res) => {
		getPostCategoryController(connectionDB).handle(req, res);
	});

	router.delete('/categories/:categoryId', (req, res) => {
		getDeleteCategoryController(connectionDB).handle(req, res);
	});

	// router.patch('/categories/:categoryId', (req, res) => {
		
	// });


	//----------------- DEVICE--------------------- //

	router.get('/devices', (req, res) => {
		getFindAllDevicesController(connectionDB).handle(req, res);
	});

	// router.get('/devices/:deviceId', (req, res) => {
		
	// });

	router.post('/devices', (req, res) => {
		getPostDeviceController(connectionDB).handle(req, res);
	});

	router.delete('/devices/:deviceId', (req, res) => {
		getDeleteDeviceController(connectionDB).handle(req, res);
	});

	// router.patch('/devices/:devicesId', (req, res) => {
		
	// });

	return router;
}

export { getAPIRouter }