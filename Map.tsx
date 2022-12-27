import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  useMap,
} from 'react-leaflet'


import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

// Leaflet.Icon.Default.imagePath =
// '../node_modules/leaflet/dist/images/'

// delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});




export default () => {
    return (
    <MapContainer  style={{ height: '100vh', width: '100wh' }} center={[51.505, -0.09]} zoom={10} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
    </Marker>
  </MapContainer>)


}