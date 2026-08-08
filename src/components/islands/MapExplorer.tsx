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
				<ZoomableGroup >
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
				</ZoomableGroup>
			</ComposableMap>
		</div>
	);
};

export default MapExplorer;
