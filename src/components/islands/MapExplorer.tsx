import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { useEffect, useState } from "react";

const US_STATES_TOPOJSON = "/us-states-10m.json";

const MapExplorer = () => {
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		if (!isHovering) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isHovering]);

	return (
		<div
			className="border-y border-ink py-6 [&_svg]:h-auto [&_svg]:w-full"
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<ComposableMap projection="geoAlbersUsa" width={975} height={610}>
				<ZoomableGroup center={[0, 0]} zoom={9}>
					<Geographies geography={US_STATES_TOPOJSON}>
						{({ geographies }) =>
							geographies.map(geography => (
								<Geography
									key={geography.rsmKey}
									geography={geography}
									className="fill-bg-2 stroke-line-strong outline-none transition-[fill] duration-100 hover:fill-accent"
									strokeWidth={0.5}
								/>
							))
						}
					</Geographies>
					{/* for each article in the currently loaded article group (by default all articles) add a marker with the location of the article's coordinates to the map. Store a hashmap of marker coordinates and reptitions of that coordinate. Change marker size depending on marker coordinate instances. When clicking on a state, calculate on client which articles are in there.   */}
				</ZoomableGroup>
			</ComposableMap>
		</div>
	);
};

export default MapExplorer;
