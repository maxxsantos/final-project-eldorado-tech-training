import { App } from './app';


const PORT = 3333;

const app = new App();
app.connectionDB().then(() => {
	console.log('DB connection');
	app.start(PORT, '0.0.0.0').then(() => {
		console.log(`API is runnining on port ${PORT}`);
	}).catch((error) => {
		console.error('Error on start API', error);
	})
}).catch((error) => {
	console.log('Error on DB connection', error);
})