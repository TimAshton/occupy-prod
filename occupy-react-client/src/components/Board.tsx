import Sector from "./Sector.tsx"

export default function Board({ sectorClickHandler, sectors }) {

    const local_sectors = []
    for(let i = 0; i < 25; i++) {
        local_sectors.push(<Sector key={i} sectorClickHandler={sectorClickHandler} sector={sectors[i]}/>)
    }

    return (
        <div>
            <div className="grid-container">
                { local_sectors }
            </div>
        </div>
    )
}