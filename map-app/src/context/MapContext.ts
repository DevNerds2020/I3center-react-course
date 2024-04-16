import { createContext } from "react";

interface MapContextInterface {
    zoom: number,
    setZoom: React.Dispatch<React.SetStateAction<number>>
}
export const MapContext = createContext<MapContextInterface>({
    zoom: 7,
    setZoom: () => {},
});
