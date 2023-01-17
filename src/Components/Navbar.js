import React from 'react'
import array from './Data_Array'

const Navbar = () => {
  const DataList = () => {
    const DATALIST = []

    let index = 0
    for (index; index < array.length; index++) {
      const card = array[index].title
      const push = DATALIST.push(card)
    }

    console.log(DATALIST)
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
      />
      <DataList />
    </div>
  )
}
export default Navbar
