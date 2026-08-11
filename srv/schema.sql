PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS articles (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	slug TEXT NOT NULL UNIQUE,
	name TEXT NOT NULL,
	byline TEXT NOT NULL,
	section TEXT NOT NULL,
	"desc" TEXT,
	keywords TEXT NOT NULL DEFAULT '',
	lat REAL NOT NULL CHECK (lat BETWEEN -90 AND 90),
	long REAL NOT NULL CHECK (long BETWEEN -180 AND 180),
	placeLabel TEXT NOT NULL,
	body TEXT NOT NULL UNIQUE,
	views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0),
	status TEXT NOT NULL DEFAULT 'published'
		CHECK (status IN ('draft', 'review', 'published', 'archived')),
	timestamp TEXT NOT NULL,
	createdAt TEXT NOT NULL DEFAULT (datetime('now')),
	updatedAt TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS articlesPublishedIdx
	ON articles (status, timestamp DESC);

CREATE INDEX IF NOT EXISTS articlesViewsIdx
	ON articles (status, views DESC);

CREATE INDEX IF NOT EXISTS articlesSectionIdx
	ON articles (section, status, timestamp DESC);

CREATE TRIGGER IF NOT EXISTS articlesTouchUpdatedAt
AFTER UPDATE ON articles
FOR EACH ROW BEGIN
	UPDATE articles SET updatedAt = datetime('now') WHERE id = OLD.id;
END;

CREATE TABLE IF NOT EXISTS schemaMigrations (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL UNIQUE,
	appliedAt TEXT NOT NULL DEFAULT (datetime('now'))
);
