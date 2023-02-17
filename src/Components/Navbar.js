import React from 'react'
import Logo from '../Assets/Logo-text.svg'

class Navbar extends React.Component() {
  constructor(props){
    super(props)
  }
  Search(x) {
    let input = x.value
    let filter = input.toUpperCase()
    let card = document.querySelectorAll('.card')
    let title

    for (let i = 0; i < card.length; i++) {
      let selected = i
      title = card[selected].getElementsByTagName('h3')
      if (
        title.innerText.toUpperCase().indexOf(filter) > -1 ||
        title.textContent.toUpperCase().indexOf(filter) > -1
      ) {
        card[selected].style.display = ''
      } else {
        card[selected].style.display = 'none'
      }
    }
  }

  render() {
    return (
      <header className="h-[10vh] bg-slate-700 flex align-center justify-between items-center px-5 py-2">
        <img src={Logo} alt="logo"/>
        <input
          placeholder="Search for games..."
          type="text"
          autoComplete="on"
          list="Gamelist"
          id="input"
          onKeyDown={this.Search(this)}
          className="p-2 rounded-md"
        />
      </header>
    )
  }
}

export default Navbar
