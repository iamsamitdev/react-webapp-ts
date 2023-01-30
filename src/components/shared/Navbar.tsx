import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray-800 fixed w-full z-20">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-shrink-0 items-center">
            <NavLink to="/" className="text-white">React Tailwind</NavLink>
          </div>
          <div className="flex flex-shrink-1">
            <NavLink to="/" className="
              text-white 
              px-3 
              py-2 
              hover:bg-gray-700
              rounded-md"
              >Home</NavLink>
            <NavLink to="/about" className="
              text-white 
              px-3 
              py-2 
              hover:bg-gray-700
              rounded-md">About</NavLink>
            <NavLink to="/teams" className="
              text-white 
              px-3 
              py-2 
              hover:bg-gray-700
              rounded-md">Teams</NavLink>
            <NavLink to="/projects" className="
              text-white 
              px-3 
              py-2 
              hover:bg-gray-700
              rounded-md">Projects</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar