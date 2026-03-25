import GameActions from "./GameActions"
import GameMessage from "./GameMessage"
import Board from "./Board"

export default function GameBoard() {
    return (
        <div className="column">
            <Board />
            <GameMessage />
            <GameActions />
        </div>
    )
}