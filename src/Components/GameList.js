import React from 'react'
import Card from './Card'

//Make a function GameList() that maps through the game database array from @MJOMA09 and makes a card that is rendered into the DOM

const GameList = (props) => {
  let array = props.array

  return (
    <div className="grid grid-cols-4 p-px gap-3  overflow-scroll" id="list">
      <Card array={array}/>
    </div>
  )
}

export default GameList
