import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const US_STATES_TOPOJSON = "/us-states-10m.json";

const MapExplorer = () => (
	<div class="border-y border-ink py-6 [&_svg]:h-auto [&_svg]:w-full">
		<ComposableMap projection="geoAlbersUsa" width={975} height={610}>
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
		</ComposableMap>
	</div>
);

export default MapExplorer;
