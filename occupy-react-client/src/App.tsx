import { useState } from 'react'
import PlayerColumn from './components/PlayerColumn.jsx'
import GameColumn from './components/GameColumn.jsx'
import './App.css'

function App() {
  const [ turnIndicator, setTurnIndicator ] = useState(1)

  return (
    <div className="container">
        <PlayerColumn name="Blue" nameClass="turn-indicator blue"/>
        <GameColumn />
        <PlayerColumn name="Red" nameClass="red"/>
    </div>
  )
}

export default App
