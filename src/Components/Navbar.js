import { ReactComponent as Logo } from '../Assets/Logo-text.svg'

const Navbar = ({ value, search , onSearch}) => {
  return (
    <header className="h-[10vh] bg-slate-700 flex align-center justify-between items-center px-5 py-2">
      <Logo />
      <div className="flex ">
        <input
          type="text"
          placeholder="Search for games..."
          value={value}
          onChange={search}
          className="p-2 rounded-md"
        />

      </div>
    </header>
  )
}
export default Navbar
