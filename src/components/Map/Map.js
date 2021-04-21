import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
// 'leaflet/dist/leaflet.css' is required to get map working.
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { showDataOnMap } from "../../utilities";

function Map({ center, zoom, countries, casesType }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution below is asked for by open street map
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* looping through all the countries and drawing circles on the screen */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
