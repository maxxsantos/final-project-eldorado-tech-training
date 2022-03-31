import { config } from './api_db/configs/database';
import express from 'express'
import { DataSource  } from 'typeorm'
export class App {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.setup();
	}

	private setup() {
		this.app.use(express.json());
	}

	public connectionDB() {
		return new Promise((resolve, reject) => {
			new DataSource(config).initialize().then((connection)=> {
				console.log(connection);
				return resolve(undefined);
			}).catch(error => reject(error))
		})
	}

	public start(port: number, host: string) {
		return new Promise((resolve, reject) => {
			try {
				this.app.listen(port, host, () => {
					return resolve(undefined)
					}
				)
			} catch(error) {
				reject(error)
			}
		})
	}
}