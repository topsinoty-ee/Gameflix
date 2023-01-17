import React from 'react'
import Movielist from './Components/MovieList'
import Array from './Components/Data_Array'
import './index.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='flex flex-col max-h-[100vh] bg-metal overflow-hidden m-0'>
      <Navbar />
      <div className='flex h-[85vh] rounded-xl  m-5'>
        <Movielist array={Array} />
      </div>
    </div>
  )
}

export default App
