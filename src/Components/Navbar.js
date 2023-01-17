import React from 'react'
import array from './Data_Array'

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

  const DataList = () => {
    const DATALIST = []

    let index = 0
    for (index; index < array.length; index++) {
      const card = array[index].title
      // eslint-disable-next-line no-unused-vars
      const push = DATALIST.push(card)
    }

    return (
      <datalist id="Movielist">
        {DATALIST.map((item) => (
          <option>{item}</option>
        ))}
      </datalist>
    )
  }
  return (
    <div>
      <input
        placeholder="Search for movies..."
        type="text"
        autoComplete="on"
        list="Movielist"
        id="input"
        onKeyDown={Search}
      />
      <DataList />
    </div>
  )
}
export default Navbar
