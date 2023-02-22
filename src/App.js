import React, { useState } from 'react'
import GameList from './Components/GameList'
import gameList from './Components/GameMockData'
import Navbar from './Components/Navbar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredCards = gameList.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )



  return (
    <div className="">
      <Navbar
        search={handleSearch}
        value={searchTerm}
      />

      <div className="w-full p-6 flex flex-row flex-wrap gap-4">
        {filteredCards.map((card, index) => (
          <div key={index} className="card">
            <div>
              <img src={card.src} alt={card.title} className='' />
            </div>

            <div className=''>
              <h3 className=''>{card.title}</h3>
              {/* taglist */}
              <ul className=''>
                {card.tags.map((selected) => {
                  return (
                    <li
                      className=''
                      key={`${card.title}-tag${selected.id}`}
                    >
                      {selected.tag}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
