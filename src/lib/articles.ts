import { readFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import { stateForPoint } from "~/lib/geo";

export interface Section {
	slug: string;
	label: string;
}

export interface Article {
	slug: string;
	sectionSlug: string;
	title: string;
	dek: string;
	byline: string;
	location: string;
	lat: number;
	lon: number;
	publishedAt: string;
	views: number;
	readMinutes: number;
	stateName: string;
	bodyParagraphs: string[];
}

interface ArticleRow {
	slug: string;
	name: string;
	byline: string;
	section: string;
	desc: string | null;
	lat: number;
	long: number;
	placeLabel: string;
	views: number;
	body: string;
	timestamp: string;
}

export const sections: Section[] = [
	{ slug: "politics", label: "Politics" },
	{ slug: "business", label: "Business" },
	{ slug: "health", label: "Health" },
	{ slug: "science", label: "Science" },
	{ slug: "education", label: "Education" },
	{ slug: "art-culture", label: "Art & Culture" },
	{ slug: "sports", label: "Sports" },
	{ slug: "opinion", label: "Opinion" },
	{ slug: "good-news", label: "Good News" }
];

const PROJECT_ROOT = process.env.PROJECT_ROOT ?? process.cwd();
const DATABASE_PATH =
	process.env.DATABASE_PATH ?? `${PROJECT_ROOT}/srv/demo.db`;
const WORDS_PER_MINUTE = 220;

const readBody = (bodyPath: string) => {
	const raw = readFileSync(`${PROJECT_ROOT}/${bodyPath}`, "utf8");
	return raw
		.split(/\n{2,}/)
		.map(block => block.trim())
		.filter(block => block.length > 0 && !block.startsWith("#"));
};

const estimateReadMinutes = (paragraphs: string[]) =>
	Math.max(
		1,
		Math.round(paragraphs.join(" ").split(/\s+/).length / WORDS_PER_MINUTE)
	);

const toArticle = (row: ArticleRow): Article => {
	const bodyParagraphs = readBody(row.body);
	return {
		slug: row.slug,
		sectionSlug: row.section,
		title: row.name,
		dek: row.desc ?? "",
		byline: row.byline,
		location: row.placeLabel,
		lat: row.lat,
		lon: row.long,
		views: row.views,
		publishedAt: row.timestamp,
		readMinutes: estimateReadMinutes(bodyParagraphs),
		stateName: stateForPoint(row.lat, row.long) ?? "Unknown",
		bodyParagraphs
	};
};

const loadArticles = (): Article[] => {
	const db = new DatabaseSync(DATABASE_PATH, { readOnly: true });
	try {
		const rows = db
			.prepare(
				`SELECT slug, name, byline, section, "desc", lat, long, placeLabel, views, body, timestamp
				 FROM articles
				 WHERE status = 'published'
				 ORDER BY timestamp DESC, id DESC`
			)
			.all() as unknown as ArticleRow[];
		return rows.map(toArticle);
	} finally {
		db.close();
	}
};

export const articles: Article[] = loadArticles();

export const sectionBySlug = new Map(
	sections.map(section => [section.slug, section])
);

export const sectionLabel = (slug: string) =>
	sectionBySlug.get(slug)?.label ?? slug;

export const articlesInSection = (slug: string) =>
	articles.filter(article => article.sectionSlug === slug);

export const sectionsWithArticles = sections.filter(
	section => articlesInSection(section.slug).length > 0
);

export const leadArticle = articles[0]!;
export const secondaryArticles = articles.slice(1, 5);
export const latestArticles = articles.slice(5, 9);
export const moreArticles = articles.slice(9);
