import { useContext } from 'react';
import { Link } from 'react-router-dom';
import IPortfolioContext from '../interfaces/IPortfolioContext';
import PortfolioContext from '../provider/PortfolioContext';
import { navbarLinks } from '../utils';

function Navbar({ navBarStyle = '' }) {
  const { currentPage } = useContext(PortfolioContext) as IPortfolioContext;

  return (
    <nav className={navBarStyle}>
      {navbarLinks.map(({ path, text }) => (
        <Link
          className={`px-3 py-2 mx-1 text-sm font-medium hover:text-cyan-500 dark:hover:text-cyan-300 ${
            path === currentPage
              ? 'border-b text-cyan-500 border-cyan-500 dark:text-cyan-300 dark:border-cyan-300'
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
