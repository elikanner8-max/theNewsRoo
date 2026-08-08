import { handleHealth } from "./routes/health";

const PORT = Number(Bun.env.PORT ?? 3001);

const notFound = () => new Response("Not Found", { status: 404 });

const route = (request: Request) => {
	const { pathname } = new URL(request.url);

	switch (pathname) {
		case "/health":
			return handleHealth();
		default:
			return notFound();
	}
};

Bun.serve({ port: PORT, fetch: route });

console.log(`api listening on http://localhost:${PORT}`);
