import { config } from './api_db/configs/database';
import express from 'express'
import { DataSource  } from 'typeorm'
import { getAPIRouter } from './routes';
export class App {
	private app: express.Application;
	private connectDB: DataSource;

	constructor() {
		this.app = express();
		this.setup();
	}

	private setup() {
		this.app.use(express.json());
	}

	public connectionDB() {
		return new Promise((resolve, reject) => {
			new DataSource(config).initialize()
				.then(connection => {
					this.connectDB = connection;
					return resolve(true);
				}
				).catch(error => reject(error))
			}
		)
	}

	private routes() {
		this.app.use(getAPIRouter(this.connectDB));
	}

	public start(port: number, host: string) {
		this.routes();
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