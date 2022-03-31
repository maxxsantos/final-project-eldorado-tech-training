import express from 'express'

export class App {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.setup();
	}

	private setup() {
		this.app.use(express.json());
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