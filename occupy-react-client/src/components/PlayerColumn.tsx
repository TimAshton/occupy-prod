import { useState } from "react"

export default function PlayerColumn({ name, nameClass, turnIndicator, sectors }) {
    const [settlerCount, setSettlerCount] = useState(1000)
    const [sectorCount, setSectorCount] = useState(0)

    return (
        <div className="column">
            <div className={`team-header ${nameClass}`}>{ name }</div>
            <div>Settlers: { settlerCount }</div>
            <div>Sectors: { sectorCount }</div>
        </div>
    )
}