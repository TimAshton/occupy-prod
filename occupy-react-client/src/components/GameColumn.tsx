import GameActions from "./GameActions.tsx"
import GameMessage from "./GameMessage.tsx"
import Board from "./Board.tsx"

export default function GameBoard({ 
    sectorClickHandler, 
    sectors, 
    status, 
    newGameClickHandler, 
    endGameClickHandler, 
    message }) {
    return (
        <div className="column">
            <Board sectorClickHandler={sectorClickHandler} sectors={sectors} />
            <GameMessage 
                status={status}
                message={message} />
            <GameActions 
                status={status} 
                newGameClickHandler={newGameClickHandler} 
                endGameClickHandler={endGameClickHandler} />
        </div>
    )
}