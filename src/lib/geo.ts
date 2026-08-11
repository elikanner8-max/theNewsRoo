import { readFileSync } from "node:fs";
import { feature } from "topojson-client";
import type { Feature, MultiPolygon, Polygon, Position } from "geojson";

const PROJECT_ROOT = process.env.PROJECT_ROOT ?? process.cwd();
const TOPOJSON_PATH = `${PROJECT_ROOT}/public/us-states-10m.json`;

type StateFeature = Feature<Polygon | MultiPolygon, { name: string }>;

const loadStateFeatures = (): StateFeature[] => {
	const topology = JSON.parse(readFileSync(TOPOJSON_PATH, "utf8"));
	const collection = feature(topology, topology.objects.states);
	return (collection as unknown as { features: StateFeature[] }).features;
};

const stateFeatures = loadStateFeatures();

const isPointInRing = (lon: number, lat: number, ring: Position[]) => {
	let inside = false;
	for (let i = 0, j = ring.length - 1; i < ring.length; j = i, i += 1) {
		const [xi, yi] = ring[i] as [number, number];
		const [xj, yj] = ring[j] as [number, number];
		const straddles = yi > lat !== yj > lat;
		if (straddles && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
			inside = !inside;
		}
	}
	return inside;
};

const isPointInPolygon = (lon: number, lat: number, rings: Position[][]) => {
	const [outer, ...holes] = rings;
	if (!outer || !isPointInRing(lon, lat, outer)) return false;
	return !holes.some(hole => isPointInRing(lon, lat, hole));
};

export const stateForPoint = (lat: number, lon: number): string | undefined => {
	const match = stateFeatures.find(stateFeature => {
		const geometry = stateFeature.geometry;
		switch (geometry.type) {
			case "Polygon":
				return isPointInPolygon(lon, lat, geometry.coordinates);
			default:
				return geometry.coordinates.some(polygon =>
					isPointInPolygon(lon, lat, polygon)
				);
		}
	});
	return match?.properties.name;
};
