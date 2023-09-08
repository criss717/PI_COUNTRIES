import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; //oppen strret maps

const Maps = ({ lat, lon }) => {
  const position = [lat, lon]; // latitud y y longitd coordenadas

  return (
    <MapContainer center={position} zoom={3} style={{ width: '400px', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Aquí está el país</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
