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
	publishedAt: string;
	readMinutes: number;
	body: string;
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

export const articleBody = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
	"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
	"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
];

export const articles: Article[] = [
	{
		slug: "lorem-ipsum-dolor-sit-amet",
		sectionSlug: "politics",
		title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Sed Do",
		dek: "Eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation ullamco.",
		byline: "Lorem Ipsum",
		location: "Toledo, Ohio",
		publishedAt: "2026-08-08",
		readMinutes: 6,
		body: "Y29udGVudC9hcnRpY2xlcy9sb3JlbS1pcHN1bS1kb2xvci1zaXQtYW1ldC5tZA=="
	},
	{
		slug: "ut-enim-ad-minim-veniam",
		sectionSlug: "business",
		title: "Ut Enim Ad Minim Veniam Quis Nostrud Exercitation",
		dek: "Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
		byline: "Dolor Amet",
		location: "Mesa, Arizona",
		publishedAt: "2026-08-08",
		readMinutes: 4,
		body: "Y29udGVudC9hcnRpY2xlcy91dC1lbmltLWFkLW1pbmltLXZlbmlhbS5tZA=="
	},
	{
		slug: "duis-aute-irure-dolor",
		sectionSlug: "health",
		title: "Duis Aute Irure Dolor in Reprehenderit in Voluptate",
		dek: "Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
		byline: "Consectetur Elit",
		location: "Cedar Rapids, Iowa",
		publishedAt: "2026-08-07",
		readMinutes: 5,
		body: "Y29udGVudC9hcnRpY2xlcy9kdWlzLWF1dGUtaXJ1cmUtZG9sb3IubWQ="
	},
	{
		slug: "excepteur-sint-occaecat",
		sectionSlug: "education",
		title: "Excepteur Sint Occaecat Cupidatat Non Proident Sunt",
		dek: "In culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.",
		byline: "Magna Aliqua",
		location: "Greenville, South Carolina",
		publishedAt: "2026-08-07",
		readMinutes: 3,
		body: "Y29udGVudC9hcnRpY2xlcy9leGNlcHRldXItc2ludC1vY2NhZWNhdC5tZA=="
	},
	{
		slug: "sed-ut-perspiciatis-unde",
		sectionSlug: "science",
		title: "Sed Ut Perspiciatis Unde Omnis Iste Natus Error",
		dek: "Sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
		byline: "Veniam Quis",
		location: "Missoula, Montana",
		publishedAt: "2026-08-06",
		readMinutes: 7,
		body: "Y29udGVudC9hcnRpY2xlcy9zZWQtdXQtcGVyc3BpY2lhdGlzLXVuZGUubWQ="
	},
	{
		slug: "nemo-enim-ipsam-voluptatem",
		sectionSlug: "art-culture",
		title: "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur",
		dek: "Aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione.",
		byline: "Ipsum Dolor",
		location: "Asheville, North Carolina",
		publishedAt: "2026-08-06",
		readMinutes: 4,
		body: "Y29udGVudC9hcnRpY2xlcy9uZW1vLWVuaW0taXBzYW0tdm9sdXB0YXRlbS5tZA=="
	},
	{
		slug: "at-vero-eos-et-accusamus",
		sectionSlug: "sports",
		title: "At Vero Eos et Accusamus et Iusto Odio Dignissimos",
		dek: "Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
		byline: "Sit Amet",
		location: "Erie, Pennsylvania",
		publishedAt: "2026-08-05",
		readMinutes: 3,
		body: "Y29udGVudC9hcnRpY2xlcy9hdC12ZXJvLWVvcy1ldC1hY2N1c2FtdXMubWQ="
	},
	{
		slug: "quis-autem-vel-eum-iure",
		sectionSlug: "good-news",
		title: "Quis Autem Vel Eum Iure Reprehenderit Qui in Ea",
		dek: "Voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.",
		byline: "Adipiscing Elit",
		location: "Bangor, Maine",
		publishedAt: "2026-08-05",
		readMinutes: 2,
		body: "Y29udGVudC9hcnRpY2xlcy9xdWlzLWF1dGVtLXZlbC1ldW0taXVyZS5tZA=="
	},
	{
		slug: "temporibus-autem-quibusdam",
		sectionSlug: "opinion",
		title: "Temporibus Autem Quibusdam et Aut Officiis Debitis",
		dek: "Rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.",
		byline: "Labore Dolore",
		location: "Flint, Michigan",
		publishedAt: "2026-08-04",
		readMinutes: 5,
		body: "Y29udGVudC9hcnRpY2xlcy90ZW1wb3JpYnVzLWF1dGVtLXF1aWJ1c2RhbS5tZA=="
	},
	{
		slug: "nam-libero-tempore-cum",
		sectionSlug: "politics",
		title: "Nam Libero Tempore Cum Soluta Nobis Est Eligendi",
		dek: "Optio cumque nihil impedit quo minus id quod maxime placeat facere.",
		byline: "Quis Nostrud",
		location: "Boise, Idaho",
		publishedAt: "2026-08-04",
		readMinutes: 4,
		body: "Y29udGVudC9hcnRpY2xlcy9uYW0tbGliZXJvLXRlbXBvcmUtY3VtLm1k"
	},
	{
		slug: "itaque-earum-rerum-hic",
		sectionSlug: "business",
		title: "Itaque Earum Rerum Hic Tenetur a Sapiente Delectus",
		dek: "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.",
		byline: "Aliquip Commodo",
		location: "Wichita, Kansas",
		publishedAt: "2026-08-03",
		readMinutes: 6,
		body: "Y29udGVudC9hcnRpY2xlcy9pdGFxdWUtZWFydW0tcmVydW0taGljLm1k"
	},
	{
		slug: "et-harum-quidem-rerum",
		sectionSlug: "health",
		title: "Et Harum Quidem Rerum Facilis Est et Expedita Distinctio",
		dek: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil.",
		byline: "Voluptate Velit",
		location: "Chattanooga, Tennessee",
		publishedAt: "2026-08-03",
		readMinutes: 3,
		body: "Y29udGVudC9hcnRpY2xlcy9ldC1oYXJ1bS1xdWlkZW0tcmVydW0ubWQ="
	}
];

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
