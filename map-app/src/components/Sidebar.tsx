import { useContext } from "react"
import { MapContext } from "../context/MapContext"

const Sidebar = () => {
    const mapItems = useContext(MapContext)
    
    const handleZoomIn = (): void => {
        mapItems.setZoom((prev) => prev + 1)
    }
    return (
        <div style={{ width: '30vw' }}>

            <button onClick={handleZoomIn}>+</button>
        </div>
    )
}

export default Sidebar