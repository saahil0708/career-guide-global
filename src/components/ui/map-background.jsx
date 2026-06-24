"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function MapBackground({ center = [40.7128, -74.006], zoom = 13 }) {
  const [mounted, setMounted] = useState(false);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Force remount on HMR updates to prevent react-leaflet strict mode crashes
    setMapKey((k) => k + 1);
  }, []);

  // Fix for default marker icon issues in Next.js/Leaflet
  const icon = typeof window !== 'undefined' ? L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  }) : null;

  if (!mounted) {
    return (
      <div className="w-full h-[400px] md:h-[500px] relative rounded-[32px] overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(204,255,0,0.03)] z-10 bg-[#181818] animate-pulse"></div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[500px] relative rounded-[32px] overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(204,255,0,0.03)] z-10 group">
      <div className="w-full h-full [&>.leaflet-container]:bg-transparent">
        <MapContainer
          key={mapKey}
          center={center}
          zoom={zoom}
          zoomControl={true}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", background: "transparent" }}
        >
          {/* Dark map tiles matching the dark-tech aesthetic */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          
          <Marker position={center} icon={icon}>
            <Popup className="custom-popup">
              <div className="text-center">
                <strong className="block text-sm">Career Guide Global</strong>
                <span className="text-xs text-neutral-500">123 Innovation Drive</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>

        {/* Subtle CSS blend overlay to maintain theme integration without obscuring the map */}
        <div className="absolute inset-0 bg-[#ccff00]/5 z-[400] mix-blend-screen pointer-events-none transition-opacity duration-500 group-hover:opacity-50"></div>
      </div>
    </div>
  );
}
