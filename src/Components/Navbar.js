import React from 'react'
import array from './Data_Array'
import {ReactComponent as Logo} from '../Assets/Logo-text.svg'

const Navbar = () => {
  function Search() {
    var input, filter, list, card, title, i, txtValue
    input = document.getElementById('input')
    filter = input.value.toUpperCase()
    list = document.getElementById('list')
    card = list.getElementsByClassName('card')

    for (i = 0; i < card.length; i++) {
      title = card[i].getElementsByTagName('h3')[0]
      txtValue = title.textContent || title.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = ''
      } else {
        card[i].style.display = 'none'
      }
    }
  }

  return (
    <header className='h-[10vh] bg-slate-700 flex align-center justify-between items-center px-5 py-2'>
    <Logo/>
      <input
        placeholder="Search for games..."
        type="text"
        autoComplete="on"
        list="Gamelist"
        id="input"
        onKeyDown={Search}
        className="p-2 rounded-md"
      />
    </header>
  )
}
export default Navbar
