import { Link } from 'react-router-dom';

const links = [
  {
    path: '/',
    text: 'Início',
  },
  {
    path: '/projects',
    text: 'Projetos',
  },
  {
    path: '/contact',
    text: 'Contato',
  },
];

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
      <div className="flex mr-3">
        {links.map(({ path, text }) => (
          <Link
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
            to={path}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
