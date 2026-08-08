import { Database } from "bun:sqlite";

const DATABASE_PATH = Bun.env.DATABASE_PATH ?? "./newsroo.db";

export const db = new Database(DATABASE_PATH, { create: true });

db.exec("PRAGMA journal_mode = WAL;");
db.exec("PRAGMA foreign_keys = ON;");

export const migrate = async () => {
	const schemaUrl = new URL("./schema.sql", import.meta.url);
	db.exec(await Bun.file(schemaUrl).text());
};
