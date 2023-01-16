import React from 'react'
import Movielist from './Components/MovieList'
import Array from './Components/Data_Array'
import './index.css'

function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Movielist array={Array}/>
    </div>
  )
}

export default App
