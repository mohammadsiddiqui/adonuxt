import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import NuxtService from "App/Services/Nuxt";
export default class NuxtController {
	/**
	 * render
	 */
	async render({ request, response, session }: HttpContextContract) {
		await session.commit();
		await NuxtService.render(request.request, response.response);
	}
}
