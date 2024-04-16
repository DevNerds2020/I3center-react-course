import { useContext, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapContext } from "../context/MapContext";

const Map = () => {
    const mapRef = useRef<null>(null);
    console.log("%c Line:8 🥤 mapRef", "color:#2eafb0", mapRef);
    const latitude = 35.7219;
    const longitude = 51.3347;
    
    const mapItems = useContext(MapContext)

    useEffect(() => {
        if(mapRef.current){
            mapRef.current.setView([latitude, longitude], mapItems.zoom)
        }
    }, [mapItems.zoom])
    console.log("%c Line:12 🍢 mapItems", "color:#93c0a4", mapItems);
    return (
        <MapContainer center={[latitude, longitude]} zoom={mapItems.zoom} ref={mapRef} style={{ height: "100vh", width: "70vw" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Additional map layers or components can be added here */}
        </MapContainer>
    )
}

export default Map