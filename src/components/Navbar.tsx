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
    path: '/about',
    text: 'Sobre',
  },
];

function Navbar({ navBarStyle = '' }) {
  const navStyle =
    navBarStyle.length > 0
      ? `${navBarStyle} text-zinc-800 dark:text-zinc-200`
      : 'text-zinc-800 dark:text-zinc-200';

  return (
    <nav className={navStyle}>
      {links.map(({ path, text }) => (
        <Link
          className="px-3 py-2 mx-1 rounded-md text-sm font-medium hover:text-cyan-300"
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
