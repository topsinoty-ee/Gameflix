import React from 'react'
import GameList from './Components/GameList'
import gameList from './Components/GameMockData'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='flex flex-col max-h-[100vh] bg-metal overflow-hidden m-0'>
      <Navbar />
      <div className='flex h-[85vh] rounded-xl  m-5'>
        <GameList data={gameList} />
      </div>
    </div>
  )
}

export default App
