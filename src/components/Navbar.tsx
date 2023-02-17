import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex content-center items-center justify-between">
      <div className="flex items-center">
        <img 
          src="/public/photo.jpg" 
          alt="Lucas da Silva" 
          className="w-10 h-15 rounded-full mr-2"
        />
        <p>Lucas da Silva</p>
      </div>
      <div className="flex">
        <Link className="px-3 py-2 rounded-md text-sm font-medium" to="/">Início</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </nav>
  )
}

export default Navbar;
