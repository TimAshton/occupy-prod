import GameActions from "./GameActions.tsx"
import GameMessage from "./GameMessage.tsx"
import Board from "./Board.tsx"

export default function GameBoard({ sectorClickHandler, sectors, status, newGameClickHandler, endGameClickHandler }) {
    return (
        <div className="column">
            <Board sectorClickHandler={sectorClickHandler} sectors={sectors} />
            <GameMessage status={status} />
            <GameActions status={status} newGameClickHandler={newGameClickHandler} endGameClickHandler={endGameClickHandler}/>
        </div>
    )
}