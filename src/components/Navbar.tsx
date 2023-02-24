import { useContext } from 'react';
import { Link } from 'react-router-dom';
import IPortfolioContext from '../interfaces/IPortfolioContext';
import PortfolioContext from '../provider/PortfolioContext';

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
    path: '/about',
    text: 'Sobre',
  },
];

function Navbar({ navBarStyle = '' }) {
  const { currentPage } = useContext(PortfolioContext) as IPortfolioContext;

  return (
    <nav className={navBarStyle}>
      {links.map(({ path, text }) => (
        <Link
          className={`px-3 py-2 mx-1 text-sm font-medium hover:text-cyan-300 ${
            path === currentPage
              ? 'text-cyan-300 border-b border-cyan-300'
              : `text-zinc-800 dark:text-zinc-200`
          } `}
          to={path}
          key={text}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
