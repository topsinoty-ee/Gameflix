import React from 'react'
import { ReactComponent as Logo } from '../Assets/Logo-text.svg'

const Navbar = ({ value, search }) => {
  return (
    <header>
      {Logo}
      <div>
        <input
          type="text"
          placeholder="Search for games..."
          value={value}
          onChange={search}
        />
      </div>
    </header>
  )
}
export default Navbar
