import { createContext } from "react";

interface MapContextInterface {
    zoom: number,
    setZoom: React.Dispatch<React.SetStateAction<number>>
    setCenter: React.Dispatch<React.SetStateAction<[number, number]>>
    center: [number, number]
}
export const MapContext = createContext<MapContextInterface>({
    zoom: 7,
    setZoom: () => {},
    center: [35.7219, 51.3347],
    setCenter: () => {},
});
