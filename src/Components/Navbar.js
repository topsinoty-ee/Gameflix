import React from 'react'


const Navbar = ({ value, search }) => {
  return (
    <header className='h-[10vh] bg-slate-700 flex align-center justify-between items-center px-5 py-2'>
      <h1 className="line-1 anim-typewriter">Welcome to GameFlix</h1>
      <input
        type="text"
        placeholder="Search for games..."
        value={value}
        onChange={search}
        className="p-2 rounded-md"
      />
    </header>
  )
}
export default Navbar

