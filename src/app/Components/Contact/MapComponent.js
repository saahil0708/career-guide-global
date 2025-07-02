'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icons in Next.js
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export function Map({ center, zoom, style }) {
  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={style}
      scrollWheelZoom={false}
      className="rounded-2xl z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          <div className="space-y-2">
            <h3 className="font-bold text-emerald-700">Campus Counseling Center</h3>
            <p className="text-sm">123 University Avenue</p>
            <p className="text-sm">Building A, Room 201</p>
            <button 
              size="sm" 
              className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Get Directions
            </button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}