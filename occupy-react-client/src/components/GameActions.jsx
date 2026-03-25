export default function GameActions() {

    function newGameHandler() {
        alert('start a new game')
    }

    return (
        <div>
            <button onClick={newGameHandler}>New Game</button>
        </div>
    )
}