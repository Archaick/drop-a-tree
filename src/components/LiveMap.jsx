import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const LiveMap = () => {
  const [markers, setMarkers] = useState([]);
  const [locationInfo, setLocationInfo] = useState({});

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const newMarker = { lat: e.latlng.lat, lng: e.latlng.lng };
        setMarkers([...markers, newMarker]);
        fetchLocationInfo(newMarker);
      }
    });
    return null;
  };

  const fetchLocationInfo = async (marker) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${marker.lat}&lon=${marker.lng}`);
      const data = response.data;
      if (data && data.display_name) {
        setLocationInfo({ ...locationInfo, [`${marker.lat},${marker.lng}`]: data.display_name });
      }
    } catch (error) {
      console.error('Error fetching location info:', error);
    }
  };

  const removeMarker = (indexToRemove) => {
    event.stopPropagation()
    setMarkers(markers.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <MapContainer
        style={{ height: "480px", width: "100%" }}
        center={[10, 25]}  // Center the map at a more balanced initial position
        zoom={3}           // Set a reasonable initial zoom level
        minZoom={3}        // Set minimum zoom level to show entire continents
        maxZoom={18}       // Set maximum zoom level for more detail
        maxBounds={[[85, -180], [-85, 180]]} // Restrict panning to the near-world bounds
        maxBoundsViscosity={1.0} // Make the map less likely to be dragged outside the bounds
        worldCopyJump={false}    // Prevent the map from repeating
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              <div>
                <p>{locationInfo[`${marker.lat},${marker.lng}`] || 'Fetching location...'}</p>
                <button onClick={(event) => removeMarker(index, event)}>Remove</button>

              </div>
            </Popup>
          </Marker>
        ))}
        <MapEvents />
      </MapContainer>
    </div>
  );
};

export default LiveMap;
