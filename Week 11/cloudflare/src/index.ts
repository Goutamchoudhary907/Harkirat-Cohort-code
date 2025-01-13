export default {
	async fetch(request, env, ctx): Promise<Response> {
			return Response.json({
				message:"You did npt send a get request"
			})
		
	},
} satisfies ExportedHandler<Env>;
