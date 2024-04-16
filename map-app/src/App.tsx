
import { useState } from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import { MapContext } from "./context/MapContext";

function App() {
  const [zoom, setZoom] = useState<number>(7)

  return (
    <div style={{ display: "flex" }}>
      <MapContext.Provider value={{zoom, setZoom}}>
        <Sidebar />
        <Map />
      </MapContext.Provider>
    </div>
  )
}

export default App
