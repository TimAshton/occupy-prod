export default function GameActions({ status, newGameClickHandler, endGameClickHandler }) {

    return (
        <div>
            <button onClick={newGameClickHandler} disabled={status}>New Game</button>
            <button onClick={endGameClickHandler} disabled={!status}>End Game</button>
        </div>
    )
}