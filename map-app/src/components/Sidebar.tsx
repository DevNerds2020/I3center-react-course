import { useContext, useRef, ChangeEvent } from "react"
import { MapContext } from "../context/MapContext"
import { useDispatch, useSelector } from "react-redux"
import { incrementZoom } from "../mapSlice"

const Sidebar = () => {
    const mapItems = useContext(MapContext)
    const inputValueRef = useRef<string>('')

    const map = useSelector((state) =>  state.map)
    const dispatch = useDispatch()

    console.log("%c Line:10 🥥 map", "color:#3f7cff", map);

    const handleZoomIn = (): void => {
        dispatch(incrementZoom())
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        inputValueRef.current = event.target.value
    }
    const handleKeyDown = (event) => {
        console.log("%c Line:16 🍿 event", "color:#ea7e5c", event);
        if (event.code == 'Enter') {
            const LatLong = inputValueRef.current.split(",")
            mapItems.setCenter([Number(LatLong[0]), Number(LatLong[1])])
        }
    }
    return (
        <div style={{ width: '30vw' }}>

            <button onClick={handleZoomIn}>+</button>
            <p>center input</p>
            <input onChange={handleChange} onKeyDown={handleKeyDown} />
        </div>
    )
}

export default Sidebar