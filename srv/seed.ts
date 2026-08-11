import { migrate, openDatabase } from "./db.ts";
import { stateForPoint } from "../src/lib/geo.ts";

interface SeedArticle {
	slug: string;
	name: string;
	byline: string;
	section: string;
	desc: string;
	keywords: string;
	lat: number;
	long: number;
	placeLabel: string;
	timestamp: string;
	views: number;
}

const seedArticles: SeedArticle[] = [
	{
		slug: "lorem-ipsum-dolor-sit-amet",
		name: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Sed Do",
		byline: "Lorem Ipsum",
		section: "politics",
		desc: "Eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation ullamco.",
		keywords: "council,budget,zoning",
		lat: 41.6528,
		long: -83.5379,
		placeLabel: "Toledo, Ohio",
		timestamp: "2026-08-08",
		views: 4820
	},
	{
		slug: "ut-enim-ad-minim-veniam",
		name: "Ut Enim Ad Minim Veniam Quis Nostrud Exercitation",
		byline: "Dolor Amet",
		section: "business",
		desc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
		keywords: "retail,costs",
		lat: 33.4152,
		long: -111.8315,
		placeLabel: "Mesa, Arizona",
		timestamp: "2026-08-08",
		views: 1310
	},
	{
		slug: "duis-aute-irure-dolor",
		name: "Duis Aute Irure Dolor in Reprehenderit in Voluptate",
		byline: "Consectetur Elit",
		section: "health",
		desc: "Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
		keywords: "clinic,access",
		lat: 41.9779,
		long: -91.6656,
		placeLabel: "Cedar Rapids, Iowa",
		timestamp: "2026-08-07",
		views: 2640
	},
	{
		slug: "excepteur-sint-occaecat",
		name: "Excepteur Sint Occaecat Cupidatat Non Proident Sunt",
		byline: "Magna Aliqua",
		section: "education",
		desc: "In culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.",
		keywords: "schools,boundaries",
		lat: 34.8526,
		long: -82.394,
		placeLabel: "Greenville, South Carolina",
		timestamp: "2026-08-07",
		views: 760
	},
	{
		slug: "sed-ut-perspiciatis-unde",
		name: "Sed Ut Perspiciatis Unde Omnis Iste Natus Error",
		byline: "Veniam Quis",
		section: "science",
		desc: "Sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
		keywords: "water,research",
		lat: 46.8721,
		long: -113.994,
		placeLabel: "Missoula, Montana",
		timestamp: "2026-08-06",
		views: 1890
	},
	{
		slug: "nemo-enim-ipsam-voluptatem",
		name: "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur",
		byline: "Ipsum Dolor",
		section: "art-culture",
		desc: "Aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione.",
		keywords: "venues,artists",
		lat: 35.5951,
		long: -82.5515,
		placeLabel: "Asheville, North Carolina",
		timestamp: "2026-08-06",
		views: 3450
	},
	{
		slug: "at-vero-eos-et-accusamus",
		name: "At Vero Eos et Accusamus et Iusto Odio Dignissimos",
		byline: "Sit Amet",
		section: "sports",
		desc: "Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
		keywords: "youth,fields",
		lat: 42.1292,
		long: -80.0851,
		placeLabel: "Erie, Pennsylvania",
		timestamp: "2026-08-05",
		views: 520
	},
	{
		slug: "quis-autem-vel-eum-iure",
		name: "Quis Autem Vel Eum Iure Reprehenderit Qui in Ea",
		byline: "Adipiscing Elit",
		section: "good-news",
		desc: "Voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.",
		keywords: "volunteers,recovery",
		lat: 44.8012,
		long: -68.7778,
		placeLabel: "Bangor, Maine",
		timestamp: "2026-08-05",
		views: 2210
	},
	{
		slug: "temporibus-autem-quibusdam",
		name: "Temporibus Autem Quibusdam et Aut Officiis Debitis",
		byline: "Labore Dolore",
		section: "opinion",
		desc: "Rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.",
		keywords: "commentary",
		lat: 43.0125,
		long: -83.6875,
		placeLabel: "Flint, Michigan",
		timestamp: "2026-08-04",
		views: 980
	},
	{
		slug: "nam-libero-tempore-cum",
		name: "Nam Libero Tempore Cum Soluta Nobis Est Eligendi",
		byline: "Quis Nostrud",
		section: "politics",
		desc: "Optio cumque nihil impedit quo minus id quod maxime placeat facere.",
		keywords: "statehouse,vote",
		lat: 43.615,
		long: -116.2023,
		placeLabel: "Boise, Idaho",
		timestamp: "2026-08-04",
		views: 1640
	},
	{
		slug: "itaque-earum-rerum-hic",
		name: "Itaque Earum Rerum Hic Tenetur a Sapiente Delectus",
		byline: "Aliquip Commodo",
		section: "business",
		desc: "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.",
		keywords: "employers,housing",
		lat: 37.6872,
		long: -97.3301,
		placeLabel: "Wichita, Kansas",
		timestamp: "2026-08-03",
		views: 410
	},
	{
		slug: "et-harum-quidem-rerum",
		name: "Et Harum Quidem Rerum Facilis Est et Expedita Distinctio",
		byline: "Voluptate Velit",
		section: "health",
		desc: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil.",
		keywords: "coverage,care",
		lat: 35.0456,
		long: -85.3097,
		placeLabel: "Chattanooga, Tennessee",
		timestamp: "2026-08-03",
		views: 1120
	}
];

const db = openDatabase();
migrate(db);

const mismatches = seedArticles.filter(row => {
	const computed = stateForPoint(row.lat, row.long);
	const labelled = row.placeLabel.split(", ")[1];
	return computed !== labelled;
});

if (mismatches.length > 0) {
	mismatches.forEach(row =>
		console.error(
			`placeLabel/state mismatch: ${row.slug} says "${row.placeLabel}" but ` +
				`${row.lat},${row.long} falls in ${stateForPoint(row.lat, row.long) ?? "no US state"}`
		)
	);
	process.exit(1);
}

const upsert = db.prepare(
	`INSERT INTO articles
		(slug, name, byline, section, "desc", keywords, lat, long, placeLabel, body, status, views, timestamp)
	 VALUES
		($slug, $name, $byline, $section, $desc, $keywords, $lat, $long, $placeLabel, $body, 'published', $views, $timestamp)
	 ON CONFLICT(slug) DO UPDATE SET
		name = excluded.name,
		byline = excluded.byline,
		section = excluded.section,
		"desc" = excluded."desc",
		keywords = excluded.keywords,
		lat = excluded.lat,
		long = excluded.long,
		placeLabel = excluded.placeLabel,
		body = excluded.body,
		timestamp = excluded.timestamp`
);

db.exec("BEGIN");
try {
	seedArticles.forEach(row => {
		upsert.run({
			slug: row.slug,
			name: row.name,
			byline: row.byline,
			section: row.section,
			desc: row.desc,
			keywords: row.keywords,
			lat: row.lat,
			long: row.long,
			placeLabel: row.placeLabel,
			body: `content/articles/${row.slug}.md`,
			views: row.views,
			timestamp: row.timestamp
		});
	});
	db.exec("COMMIT");
} catch (error) {
	db.exec("ROLLBACK");
	throw error;
}

const total = db
	.prepare("SELECT COUNT(*) AS total FROM articles")
	.get() as unknown as { total: number };

console.log(
	`seeded ${seedArticles.length} articles, ${total.total} total, all placeLabels agree with their coordinates`
);
db.close();
