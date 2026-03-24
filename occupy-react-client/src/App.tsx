import PlayerColumn from './components/PlayerColumn.jsx'
import GameColumn from './components/GameColumn.jsx'
import './App.css'

function App() {
  return (
    <>
        <div className="container">
            <PlayerColumn name="Blue" nameClass="blue"/>
            <GameColumn />
            <PlayerColumn name="Red" nameClass="red"/>
        </div>
    </>
  )
}

export default App
