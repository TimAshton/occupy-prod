import Sector from "./Sector"

export default function Board() {
    const sectors = []
    for(let i = 0; i < 25; i++) {
        sectors.push(<Sector key={i} />)
    }

    return (
        <div>
            <div className="grid-container">
                { sectors }
            </div>
        </div>
    )
}