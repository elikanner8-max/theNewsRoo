import { useMemo, useState } from "react";
import { geoAlbersUsa } from "d3-geo";
import { formatViews } from "~/lib/format";
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	ZoomableGroup
} from "react-simple-maps";

const US_STATES_TOPOJSON = "/us-states-10m.json";
const MAP_WIDTH = 975;
const MAP_HEIGHT = 610;
const MIN_ZOOM = 1;
const MAX_ZOOM = 12;

export interface MapArticle {
	slug: string;
	title: string;
	sectionLabel: string;
	location: string;
	views: number;
	lat: number;
	lon: number;
}

interface MapExplorerProps {
	articles: MapArticle[];
}

interface PlacedArticle extends MapArticle {
	x: number;
	y: number;
	radius: number;
}

interface Cluster {
	id: string;
	x: number;
	y: number;
	radius: number;
	members: PlacedArticle[];
}

const projection = geoAlbersUsa()
	.translate([MAP_WIDTH / 2, MAP_HEIGHT / 2])
	.scale(1300);

const radiusForViews = (views: number) =>
	Math.min(16, Math.max(4, 4 + Math.sqrt(views) * 0.16));

const buildClusters = (placed: PlacedArticle[], zoom: number): Cluster[] => {
	const byViews = [...placed].sort((a, b) => b.views - a.views);
	const taken = new Set<string>();
	const clusters: Cluster[] = [];

	byViews.forEach(seed => {
		if (taken.has(seed.slug)) return;
		taken.add(seed.slug);

		const members = [seed];
		byViews.forEach(candidate => {
			if (taken.has(candidate.slug)) return;
			const distance = Math.hypot(
				(candidate.x - seed.x) * zoom,
				(candidate.y - seed.y) * zoom
			);
			if (distance < Math.max(seed.radius, candidate.radius) * 2) {
				members.push(candidate);
				taken.add(candidate.slug);
			}
		});

		const totalViews = members.reduce(
			(sum, member) => sum + member.views,
			0
		);
		clusters.push({
			id: seed.slug,
			x:
				members.reduce((sum, member) => sum + member.x, 0) /
				members.length,
			y:
				members.reduce((sum, member) => sum + member.y, 0) /
				members.length,
			radius: radiusForViews(totalViews),
			members
		});
	});

	return clusters;
};

const MapExplorer = ({ articles }: MapExplorerProps) => {
	const [position, setPosition] = useState({
		coordinates: [-97, 38] as [number, number],
		zoom: 1
	});
	const [activeId, setActiveId] = useState<string | null>(null);

	const placed = useMemo(
		() =>
			articles
				.map(article => {
					const point = projection([article.lon, article.lat]);
					if (!point) return null;
					return {
						...article,
						x: point[0],
						y: point[1],
						radius: radiusForViews(article.views)
					};
				})
				.filter((entry): entry is PlacedArticle => entry !== null),
		[articles]
	);

	const clusters = useMemo(
		() => buildClusters(placed, position.zoom),
		[placed, position.zoom]
	);

	const centre = projection(position.coordinates) ?? [
		MAP_WIDTH / 2,
		MAP_HEIGHT / 2
	];

	const visibleClusters = clusters.filter(cluster => {
		const screenX = (cluster.x - centre[0]) * position.zoom + MAP_WIDTH / 2;
		const screenY =
			(cluster.y - centre[1]) * position.zoom + MAP_HEIGHT / 2;
		return (
			screenX >= 0 &&
			screenX <= MAP_WIDTH &&
			screenY >= 0 &&
			screenY <= MAP_HEIGHT
		);
	});

	const visibleArticles = visibleClusters
		.flatMap(cluster => cluster.members)
		.sort((a, b) => b.views - a.views);

	const active = clusters.find(cluster => cluster.id === activeId);
	const activeTop = active
		? [...active.members].sort((a, b) => b.views - a.views)[0]
		: undefined;

	const clusterCoordinates = (cluster: Cluster): [number, number] => {
		const inverted = projection.invert?.([cluster.x, cluster.y]);
		return (
			(inverted as [number, number]) ?? [
				cluster.members[0]!.lon,
				cluster.members[0]!.lat
			]
		);
	};

	const onClusterClick = (cluster: Cluster) => {
		switch (cluster.members.length) {
			case 1:
				window.location.href = `/articles/${cluster.members[0]!.slug}`;
				return;
			default:
				setPosition({
					coordinates: clusterCoordinates(cluster),
					zoom: Math.min(MAX_ZOOM, position.zoom * 3)
				});
		}
	};

	return (
		<div>
			<div className="mb-3 flex flex-wrap items-center justify-between gap-2">
				<p className="font-ui text-muted text-xs">
					Drag to pan · scroll to zoom · circle size is readership
				</p>
				<p className="font-ui text-muted text-xs">
					{visibleArticles.length} of {articles.length} stories in
					view
				</p>
			</div>

			<div className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
				<ComposableMap
					projection="geoAlbersUsa"
					width={MAP_WIDTH}
					height={MAP_HEIGHT}
					className="h-auto w-full"
				>
					<ZoomableGroup
						center={position.coordinates}
						zoom={position.zoom}
						minZoom={MIN_ZOOM}
						maxZoom={MAX_ZOOM}
						translateExtent={[
							[0, 0],
							[MAP_WIDTH, MAP_HEIGHT]
						]}
						onMoveEnd={next =>
							setPosition({
								coordinates: next.coordinates as [
									number,
									number
								],
								zoom: next.zoom
							})
						}
					>
						<Geographies geography={US_STATES_TOPOJSON}>
							{({ geographies }) =>
								geographies.map(geography => (
									<Geography
										key={geography.rsmKey}
										geography={geography}
										className="fill-surface-2 stroke-line-strong outline-none"
										strokeWidth={0.4}
									/>
								))
							}
						</Geographies>

						{clusters.map(cluster => (
							<Marker
								key={cluster.id}
								coordinates={clusterCoordinates(cluster)}
								onMouseEnter={() => setActiveId(cluster.id)}
								onMouseLeave={() => setActiveId(null)}
								onClick={() => onClusterClick(cluster)}
							>
								<circle
									r={cluster.radius / position.zoom}
									className="fill-accent stroke-bg cursor-pointer"
									strokeWidth={2 / position.zoom}
									opacity={activeId === cluster.id ? 1 : 0.85}
								/>
								{cluster.members.length > 1 && (
									<text
										textAnchor="middle"
										y={
											(cluster.radius * 0.35) /
											position.zoom
										}
										className="font-ui fill-bg pointer-events-none font-semibold"
										style={{
											fontSize: `${11 / position.zoom}px`
										}}
									>
										{cluster.members.length}
									</text>
								)}
							</Marker>
						))}
					</ZoomableGroup>
				</ComposableMap>

				{active && activeTop && (
					<div className="pointer-events-none absolute right-3 bottom-3 w-64 overflow-hidden rounded-[var(--radius-control)] border border-line bg-surface shadow-panel">
						<div className="px-3 py-2">
							<p className="kicker">{activeTop.sectionLabel}</p>
							<p className="mt-0.5 text-sm font-bold">
								{activeTop.title}
							</p>
							<p className="font-ui text-muted mt-0.5 text-xs">
								{activeTop.location} ·{" "}
								{formatViews(activeTop.views)} views
							</p>
						</div>
						{active.members.length > 1 && (
							<p className="font-ui text-muted border-t border-line bg-surface-2 px-3 py-1.5 text-xs">
								{active.members.length - 1} more{" "}
								{active.members.length - 1 === 1
									? "story"
									: "stories"}{" "}
								here · click to zoom
							</p>
						)}
					</div>
				)}
			</div>

			<h2 className="mt-8 text-xl font-bold">Most read in view</h2>
			<ol className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
				{visibleArticles.map((article, index) => (
					<li
						key={article.slug}
						className="flex gap-3 border-t border-line pt-2"
					>
						<span className="font-ui text-muted mt-0.5 text-xs tabular-nums">
							{index + 1}
						</span>
						<span>
							<a
								className="decoration-accent text-sm font-bold hover:underline"
								href={`/articles/${article.slug}`}
							>
								{article.title}
							</a>
							<span className="font-ui text-muted block text-xs">
								{article.location} ·{" "}
								{formatViews(article.views)} views
							</span>
						</span>
					</li>
				))}
			</ol>
		</div>
	);
};

export default MapExplorer;
