import React from 'react'
import Movielist from './Components/MovieList'
import './index.css'

function App() {
  const arry=[
    {
        src: "https://...." ,
        title: "Alien",
        tags:[
            {tag:"horror", id:1},
            {tag:"space", id:2},
            {tag:"fantasy", id:3}
       ]
    },
    {
        src: "https://...." ,
        title: "Red Notice",
        tags:[
            {tag:"comedy", id:1},
            {tag:"thiller", id:2},
            {tag:"crime", id:3},
       ]
    },
] 

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Movielist array={arry}/>
    </div>
  )
}

export default App
