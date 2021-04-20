import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

function Map() {
  return (
    <div className="map">
      <LeafletMap>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution below is asked for by open street map
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
}

export default Map;
