import React from 'react'
import Movielist from './Components/MovieList'
import Array from './Components/Data_Array'
import './index.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <Movielist array={Array} />
      </div>
    </div>
  )
}

export default App
