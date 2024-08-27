import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [player, setPlayer] = useState(null)
  const [playerAdded, setPlayerAdded] = useState(false)
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<AllPlayers setPlayer={setPlayer} playerAdded={playerAdded} setPlayerAdded={setPlayerAdded}/>} />
        <Route path='/players/:id' element={<SinglePlayer player={player}/>} />
    </Routes>
    </div>
  )
}

export default App
