import Application from "@ioc:Adonis/Core/Application";
import { loadNuxt, build } from "nuxt";
const isDev = Application.nodeEnvironment === "development";

class NuxtService {
	nuxt: any = null;

	constructor() {
		this.nuxt = null;
	}

	async build(dev = isDev) {
		this.nuxt = await loadNuxt(dev ? "dev" : "start");
		if (dev) build(this.nuxt);
	}

	render(req, res) {
		return new Promise((resolve, reject) => {
			this.nuxt.render(req, res, (promise) => {
				promise.then(resolve).catch(reject);
			});
		});
	}
}

export default new NuxtService();
