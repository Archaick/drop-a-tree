import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LiveMap = () => {
  const [markers, setMarkers] = useState([]);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const newMarker = { lat: e.latlng.lat, lng: e.latlng.lng };
        setMarkers([...markers, newMarker]);
      }
    });
    return null;
  };

  return (
    <div>
      <MapContainer
        style={{ height: "480px", width: "100%" }}
        center={[10, 25]}  // Center the map at a more balanced initial position
        zoom={3}          // Set a reasonable initial zoom level
        minZoom={3}       // Set minimum zoom level to show entire continents
        maxZoom={18}      // Set maximum zoom level for more detail
        maxBounds={[[85, -180], [-85, 180]]} // Restrict panning to the near-world bounds
        maxBoundsViscosity={1.0} // Make the map less likely to be dragged outside the bounds
        worldCopyJump={false} // Prevent the map from repeating
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]} />
        ))}
        <MapEvents />
      </MapContainer>
    </div>
  );
};

export default LiveMap;
