import { useEffect, useState } from "react";

interface LocalRankerProps {
	trackId: string;
}

const TIMEZONE_ORIGINS: Record<string, [number, number]> = {
	"America/New_York": [40.71, -74.01],
	"America/Detroit": [42.33, -83.05],
	"America/Toronto": [43.65, -79.38],
	"America/Indiana/Indianapolis": [39.77, -86.16],
	"America/Kentucky/Louisville": [38.25, -85.76],
	"America/Chicago": [41.88, -87.63],
	"America/Winnipeg": [49.9, -97.14],
	"America/Denver": [39.74, -104.99],
	"America/Boise": [43.62, -116.2],
	"America/Edmonton": [53.55, -113.49],
	"America/Phoenix": [33.45, -112.07],
	"America/Los_Angeles": [34.05, -118.24],
	"America/Vancouver": [49.28, -123.12],
	"America/Anchorage": [61.22, -149.9],
	"Pacific/Honolulu": [21.31, -157.86]
};

const US_CENTROID: [number, number] = [39.83, -98.58];

const toRadians = (value: number) => (value * Math.PI) / 180;

const distanceKm = (
	[lat1, lon1]: [number, number],
	[lat2, lon2]: [number, number]
) => {
	const earthRadiusKm = 6371;
	const dLat = toRadians(lat2 - lat1);
	const dLon = toRadians(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) ** 2 +
		Math.cos(toRadians(lat1)) *
			Math.cos(toRadians(lat2)) *
			Math.sin(dLon / 2) ** 2;
	return 2 * earthRadiusKm * Math.asin(Math.sqrt(a));
};

const readOrigin = (): [number, number] => {
	try {
		const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		return TIMEZONE_ORIGINS[zone] ?? US_CENTROID;
	} catch {
		return US_CENTROID;
	}
};

export async function getLocation(): Promise<[number, number, string]> {
	try {
		const response = await fetch("https://geolocation-db.com/json/");
		if (!response.ok) return [...readOrigin(), "unkown"];

		const data = (await response.json()) as {
			latitude?: number | string;
			longitude?: number | string;
			city?: string;
		};

		const lat = Number(data.latitude);
		const lon = Number(data.longitude);
		const city = String(data.city);

		return Number.isFinite(lat) && Number.isFinite(lon)
			? [lat, lon, city]
			: [...readOrigin(), "unknown"];
	} catch {
		return [...readOrigin(), "unknown"];
	}
}

const LocalRanker = ({ trackId }: LocalRankerProps) => {
	const [nearestCity, setNearestCity] = useState<string | null>(null);
	// Populate neasonously
	useEffect(() => {
		let mounted = true;
		getLocation().then(([, , city]) => {
			if (mounted) setNearestCity(city ?? null);
		});
		return () => {
			mounted = false;
		};
	}, []);
	useEffect(() => {
		const track = document.getElementById(trackId);
		if (!track) return;

		const origin = readOrigin();
		const items = [...track.children] as HTMLElement[];

		const ranked = items
			.map(item => {
				const lat = Number(item.dataset.lat);
				const lon = Number(item.dataset.lon);
				const views = Number(item.dataset.views ?? 0);
				const city = item.dataset.city ?? "";
				const valid = Number.isFinite(lat) && Number.isFinite(lon);
				return {
					item,
					city,
					views,
					distance: valid
						? distanceKm(origin, [lat, lon])
						: Number.MAX_SAFE_INTEGER
				};
			})
			.sort((a, b) => {
				switch (a.city === b.city) {
					case true:
						return b.views - a.views;
					default:
						return a.distance - b.distance;
				}
			});

		ranked.forEach(entry => track.appendChild(entry.item));
		track.scrollTo({ left: 0 });
		setNearestCity(ranked[0]?.city ?? null);
	}, [trackId]);

	if (!nearestCity) return null;

	return (
		<span className="font-ui text-muted text-xs">
			Closest to you · {nearestCity}
		</span>
	);
};

export default LocalRanker;

import type { Article } from "~/lib/articles";

const MILES_PER_KILOMETER = 0.621371;

type ArticleWithPublishedAt = Article & {
	publishedAt?: string | Date;
};

export async function rankArticles(
	articles: Article[],
	maxDistanceMiles: number
): Promise<Article[]> {
	const [originLat, originLon, city] = await getLocation();
	const origin: [number, number] = [originLat, originLon];

	return articles
		.map((article) => {
			const lat = Number(article.lat);
			const lon = Number(article.lon);

			if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
				return null;
			}

			const distanceMiles =
				distanceKm(origin, [lat, lon]) * MILES_PER_KILOMETER;

			return {
				article,
				distanceMiles
			};
		})
		.filter(
			(
				entry
			): entry is {
				article: Article;
				distanceMiles: number;
			} =>
				entry !== null &&
				entry.distanceMiles <= maxDistanceMiles
		)
		.sort((a, b) => {
			// Nearest first.
			const distanceDifference =
				a.distanceMiles - b.distanceMiles;

			if (distanceDifference !== 0) {
				return distanceDifference;
			}

			const aPublished = new Date(
				(a.article as ArticleWithPublishedAt).publishedAt ?? 0
			).getTime();

			const bPublished = new Date(
				(b.article as ArticleWithPublishedAt).publishedAt ?? 0
			).getTime();

			// Most recent first.
			const publishedDifference = bPublished - aPublished;

			if (publishedDifference !== 0) {
				return publishedDifference;
			}

			// Most views first.
			return Number(b.article.views ?? 0) - Number(a.article.views ?? 0);
		})
		.map(({ article }) => article);
}