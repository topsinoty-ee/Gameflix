import React, { useState } from 'react'
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
    <div>
      <Navbar
        search={handleSearch}
        value={searchTerm}
      />

      <div>
        {filteredCards.map((card, index) => (
          <div key={index} className="card">
            <div>
              <img src={card.src} alt={card.title}  />
            </div>

            <div>
              <h3>{card.title}</h3>
              {/* taglist */}
              <ul>
                {card.tags.map((selected) => {
                  return (
                    <li
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
