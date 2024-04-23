import { useContext, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapContext } from "../context/MapContext";
import { useSelector } from "react-redux";

const Map = () => {
    const mapRef = useRef<null>(null);
    console.log("%c Line:8 🥤 mapRef", "color:#2eafb0", mapRef);
    const latitude = 35.7219;
    const longitude = 51.3347;

    const map = useSelector((state) => state.map)

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setView(map.center, map.zoom)
        }
    }, [map.zoom, map.center])
    
    return (
        <MapContainer center={[latitude, longitude]} zoom={map.zoom} ref={mapRef} style={{ height: "100vh", width: "70vw" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Additional map layers or components can be added here */}
        </MapContainer>
    )
}

export default Map