import React from 'react'

//Make a function GameList() that maps through the game database array from @MJOMA09 and makes a card that is rendered into the DOM

const GameList = (props) => {
  let array = props.array

  const Card = () => {
    return array.map((card) => {
      return (
        // DO NOT CHANGE OR MODIFY 'card'. IT IS AN ESSENTIAL HOOK FOR THE FILTER
        <div className="card">
          <div>
            <img src={card.src} alt={card.title} className=''/>
          </div>

          <div>
            <h3>{card.title}</h3>
            {/* taglist */}
            <ul>
              {card.tags.map((selected) => {
                const keyVal = `${card.title}-tag${selected.id}`
                return (
                  <li
                    key={keyVal}
                  >
                    {selected.tag}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="grid grid-cols-4 mx-0 overflow-scroll" id="list">
      <Card />
    </div>
  )
}

export default GameList
