import express from "express";
import cors from "cors";
import {
	openDatabase,
	incrementArticleViews,
	selectArticleBySlug,
	selectArticlesInSection,
	selectPublishedArticles
} from "./db";

const PORT = Number(process.env.PORT ?? 3001);
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? "http://localhost:4321";

const db = openDatabase();

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "64kb" }));
app.use(cors({ origin: CORS_ORIGIN }));

const toArticle = (row: {
	slug: string;
	name: string;
	byline: string;
	section: string;
	desc: string | null;
	keywords: string;
	lat: number;
	long: number;
	placeLabel: string;
	views: number;
	timestamp: string;
}) => ({
	slug: row.slug,
	title: row.name,
	byline: row.byline,
	section: row.section,
	dek: row.desc ?? "",
	keywords: row.keywords ? row.keywords.split(",") : [],
	lat: row.lat,
	lon: row.long,
	placeLabel: row.placeLabel,
	views: row.views,
	publishedAt: row.timestamp
});

app.get("/health", (_req, res) => {
	res.json({ status: "ok" });
});

app.get("/articles", (req, res, next) => {
	try {
		const section = req.query.section;
		const rows =
			typeof section === "string" && section.length > 0
				? selectArticlesInSection(db, section)
				: selectPublishedArticles(db);
		res.json(rows.map(toArticle));
	} catch (error) {
		next(error);
	}
});

app.get("/articles/:slug", (req, res, next) => {
	try {
		const row = selectArticleBySlug(db, req.params.slug);
		if (!row) {
			res.status(404).json({ error: "Not found" });
			return;
		}
		res.json(toArticle(row));
	} catch (error) {
		next(error);
	}
});

app.get("/location", (_req, res) => {  // TODO-Accounts: add actual location data
	res.json({
		lat:  42.340382, 
		long: -72.496819
	})
})

app.post("/articles/:slug/view", (req, res, next) => {
	try {
		const result = incrementArticleViews(db, req.params.slug);
		if (!result) {
			res.status(404).json({ error: "Not found" });
			return;
		}
		res.json({ views: result.views });
	} catch (error) {
		next(error);
	}
});

app.use((_req, res) => {
	res.status(404).json({ error: "Not found" });
});

app.use(
	(
		error: Error,
		_req: express.Request,
		res: express.Response,
		_next: express.NextFunction
	) => {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
);

const server = app.listen(PORT, () => {
	console.log(`api listening on http://localhost:${PORT}`);
});

const shutdown = () => {
	server.close(() => {
		db.close();
		process.exit(0);
	});
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
