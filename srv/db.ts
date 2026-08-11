import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const SRV_DIR = fileURLToPath(new URL(".", import.meta.url));

export const DATABASE_PATH = process.env.DATABASE_PATH ?? `${SRV_DIR}demo.db`;

export interface ArticleRow {
	id: number;
	slug: string;
	name: string;
	byline: string;
	section: string;
	desc: string | null;
	keywords: string;
	lat: number;
	long: number;
	placeLabel: string;
	body: string;
	status: string;
	views: number;
	timestamp: string;
}

export const openDatabase = (path = DATABASE_PATH) => {
	const db = new DatabaseSync(path);
	db.exec("PRAGMA journal_mode = WAL;");
	db.exec("PRAGMA foreign_keys = ON;");
	db.exec("PRAGMA busy_timeout = 5000;");
	db.exec("PRAGMA synchronous = NORMAL;");
	return db;
};

export const migrate = (db: DatabaseSync) => {
	db.exec(readFileSync(`${SRV_DIR}schema.sql`, "utf8"));
};

const PUBLISHED_COLUMNS = `
	id, slug, name, byline, section, "desc", keywords,
	lat, long, placeLabel, body, status, views, timestamp
`;

export const selectPublishedArticles = (db: DatabaseSync) =>
	db
		.prepare(
			`SELECT ${PUBLISHED_COLUMNS} FROM articles
			 WHERE status = 'published'
			 ORDER BY timestamp DESC, id DESC`
		)
		.all() as unknown as ArticleRow[];

export const selectArticleBySlug = (db: DatabaseSync, slug: string) =>
	db
		.prepare(
			`SELECT ${PUBLISHED_COLUMNS} FROM articles
			 WHERE status = 'published' AND slug = ?`
		)
		.get(slug) as unknown as ArticleRow | undefined;

export const incrementArticleViews = (db: DatabaseSync, slug: string) =>
	db
		.prepare(
			`UPDATE articles SET views = views + 1
			 WHERE slug = ? AND status = 'published'
			 RETURNING views`
		)
		.get(slug) as unknown as { views: number } | undefined;

export const selectArticlesInSection = (db: DatabaseSync, section: string) =>
	db
		.prepare(
			`SELECT ${PUBLISHED_COLUMNS} FROM articles
			 WHERE status = 'published' AND section = ?
			 ORDER BY timestamp DESC, id DESC`
		)
		.all(section) as unknown as ArticleRow[];
