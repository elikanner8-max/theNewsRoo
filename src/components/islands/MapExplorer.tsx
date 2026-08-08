import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const US_STATES_TOPOJSON = "/us-states-10m.json";

const MapExplorer = () => (
	<div class="mapExplorer">
		<ComposableMap projection="geoAlbersUsa" width={975} height={610}>
			<Geographies geography={US_STATES_TOPOJSON}>
				{({ geographies }) =>
					geographies.map(geography => (
						<Geography
							key={geography.rsmKey}
							geography={geography}
							className="mapState"
						/>
					))
				}
			</Geographies>
		</ComposableMap>
	</div>
);

export default MapExplorer;
