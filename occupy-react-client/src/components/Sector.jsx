import { useState } from "react"

export default function Sector() {
    const [settlerCount, setSettlerCount] = useState(0)

    function clickHandler(evt) {
        console.log(evt)
    }

    return (
        <div className="box" onClick={clickHandler}></div>
    )
}