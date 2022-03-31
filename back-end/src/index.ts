import { App } from './app';


const PORT = 3333;

const app = new App();

app.start(PORT, '0.0.0.0').then(() => {
	console.log(`API is runnining on port ${PORT}`);
}).catch((error) => {
	console.error('Error on start API', error);
})