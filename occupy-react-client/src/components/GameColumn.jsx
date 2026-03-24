import Sector from "./Sector"

export default function GameBoard() {

    const sectors = []
    for(let i = 0; i < 25; i++) {
        sectors.push(<Sector key={i} />)
    }

    return (
        <div className="column">
            <div>
                <div className="grid-container">
                    { sectors }
                </div>
            </div>
            <div>game message</div>
            <div>game actions</div>
            <div>
                <button>New Game</button>
            </div>
        </div>
    )
}