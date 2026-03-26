import { useState, useEffect, use } from 'react'
import PlayerColumn from './components/PlayerColumn.js'
import GameColumn from './components/GameColumn.js'
import './App.css'

function createSector(x: number,y: number) {
    return {
        x,
        y,
        owner: "",
        settlerCount: 0,
    }
}

const sectors_arr = [
    createSector(1, 1),
    createSector(1, 2),
    createSector(1, 3),
    createSector(1, 4),
    createSector(1, 5),
    createSector(2, 1),
    createSector(2, 2),
    createSector(2, 3),
    createSector(2, 4),
    createSector(2, 5),
    createSector(3, 1),
    createSector(3, 2),
    createSector(3, 3),
    createSector(3, 4),
    createSector(3, 5),
    createSector(4, 1),
    createSector(4, 2),
    createSector(4, 3),
    createSector(4, 4),
    createSector(4, 5),
    createSector(5, 1),
    createSector(5, 2),
    createSector(5, 3),
    createSector(5, 4),
    createSector(5, 5),
]

function App() {
  const [ turnIndicator, setTurnIndicator ] = useState(1)
  const [ status, setStatus ] = useState(false)
  const [ playerOne, setPlayerOne ] = useState({ name: "Blue", settlers: 1000 })
  const [ playerTwo, setPlayerTwo ] = useState({ name: "Red", settlers: 1000 })

  // Replaces componentDidMount:
  useEffect(() => {
    console.log("Component mounted.")
    return () => {
      console.log("Component will unmount.")
    }
  }, [])

  useEffect(() => {
    console.log("Turn indicator changed: ", turnIndicator)
  }, [turnIndicator])

  function sectorClickHandler(sector: { x: number, y: number }) {
    console.log("Sector clicked: ", sector.x, sector.y)
      setTurnIndicator(turnIndicator === 1 ? 2 : 1)
  }

  function newGameClickHandler() {
    setStatus(true)
  }

  function endGameClickHandler() {
    setStatus(false)
  }

  return (
    <div className="container">
        <PlayerColumn 
          name="Blue" 
          turnIndicator={turnIndicator} 
          nameClass={`blue ${turnIndicator === 1 ? 'turn-indicator' : ''}`}
          sectors={sectors_arr} />
        <GameColumn 
          sectorClickHandler={sectorClickHandler}
          sectors={sectors_arr}
          status={status}
          newGameClickHandler={newGameClickHandler}
          endGameClickHandler={endGameClickHandler} />
        <PlayerColumn 
          name="Red" 
          turnIndicator={turnIndicator} 
          nameClass={`red ${turnIndicator === 2 ? 'turn-indicator' : ''}`} 
          sectors={sectors_arr} />
    </div>
  )
}

export default App
