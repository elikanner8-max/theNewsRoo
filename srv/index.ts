import express, { Application, Request, Response } from "express";
import * as sqlite3 from "sqlite3";

const app: Application = express();
const port = 3000;

app.use(express.json());

const db = new sqlite3.Database("demo.db");

app.get("/articles", (req, res) => {
	db.all("SELECT * FROM articles", (err, rows) => {
		if (err) {
			console.error(err);
			return;
		}
		res.json(rows);
	});
});

