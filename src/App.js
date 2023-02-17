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

  const handleSearchSubmit = () => {
    console.log('Search for:', searchTerm);
  };

  return (
    <div className="flex flex-col max-h-[100vh] bg-metal overflow-hidden m-0">
      <Navbar
        search={handleSearch}
        value={searchTerm}
        onSearch={handleSearchSubmit}
      />
      <div className="flex h-[85vh] rounded-xl  m-5">
        {filteredCards.map((card, index) => (
          <div key={index} className="card flex flex-col shadow-black shadow-sm rounded-sm hover:shadow-black hover:shadow-md hover:transition hover:cursor-pointer select-none max-h-[420px]">
            <div>
              <img src={card.src} alt={card.title} className='' />
            </div>

            <div className='p-3 flex flex-grow flex-col place-content-between content-between justify-between gap-3'>
              <h3 className='text-xl font-bold select-auto'>{card.title}</h3>
              {/* taglist */}
              <ul className='flex space-x-1'>
                {card.tags.map((selected) => {
                  const keyVal = `${card.title}-tag${selected.id}`
                  return (
                    <li
                      className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold p-2 rounded-2xl max-h-6 flex text-center items-center place-content-center content-center justify-items-center text-[1vw]'
                      key={keyVal}
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
