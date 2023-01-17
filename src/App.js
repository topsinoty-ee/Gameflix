import React from 'react'
import Movielist from './Components/MovieList'
import Array from './Components/Data_Array'
import './index.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='flex flex-col h-[100vh] bg-metal '>
      <Navbar />
      <div>
        <Movielist array={Array} />
      </div>
    </div>
  )
}

export default App
