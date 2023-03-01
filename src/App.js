import React,{useState} from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import gameList from './Components/GameMockData'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredCards = gameList.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className='flex flex-col max-h-[100vh] bg-metal overflow-hidden m-0'>
      <Navbar
        search={handleSearch}
        value={searchTerm}
      />
      <div className='flex h-[85vh] rounded-xl  m-5'>
        <div className="grid grid-cols-4 p-px gap-3  overflow-scroll" id="list">
          {filteredCards.map((card, index) => (
            <Card card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
