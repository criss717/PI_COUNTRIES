import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; //oppen strret maps

const Maps = ({ lat, lon, area }) => {
  const position = [lat, lon]; // latitud y y longitd coordenadas    
  const zoom= area<10000 ? 7 : 3.3 // para mostar de manera escalada el zoom dependiendo del área

  return (
    <MapContainer center={position} zoom={zoom} style={{ width: '400px', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>here is the Country</Popup> 
      </Marker>
    </MapContainer>
  );
};

export default Maps;
