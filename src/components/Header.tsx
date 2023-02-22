import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';

function Header() {
  const [themeIcon, setThemeIcon] = useState('dark');

  useEffect(() => {
    if (localStorage.isLightMode) setThemeIcon('light');
  });

  const changeTheme = () => {
    if (localStorage.isLightMode) {
      localStorage.removeItem('isLightMode');
      document.documentElement.classList.add('dark');
      setThemeIcon('dark');
    } else {
      localStorage.setItem('isLightMode', 'true');
      document.documentElement.classList.remove('dark');
      setThemeIcon('light');
    }
  };

  return (
    <header className="flex content-center items-center justify-end pt-3 m-3">
      <Navbar navBarStyle='flex mr-9 rounded-full bg-white/90 px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10' />
      <div className="flex justify-self-end">
        <button
          className="first-line:group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          onClick={changeTheme}
        >
          {themeIcon === 'dark' ? (
            <MoonIcon className="h-6 w-6 stroke-white hover:stroke-cyan-300" />
          ) : (
            <SunIcon className="h-6 w-6 stroke-gray-600 hover:stroke-cyan-300" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
