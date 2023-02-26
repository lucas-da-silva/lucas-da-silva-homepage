import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import { Bars3Icon } from '@heroicons/react/24/outline';
import NavbarDropdown from './NavbarDropdown';

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
      <Navbar navBarStyle="hidden md:flex mr-9 rounded-full bg-white/90 px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10" />
      <div className="flex justify-self-end">
        <button
          className="flex w-12 h-10 items-center justify-center rounded-full bg-purple-dark shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-orange-light dark:ring-white/10 hover:ring-zinc-300 dark:hover:ring-zinc-600 hover:bg-purple-darkest dark:hover:bg-orange-300"
          onClick={changeTheme}
        >
          {themeIcon === 'dark' ? (
            <SunIcon className="h-5 w-5 stroke-zinc-900" />
          ) : (
            <MoonIcon className="h-5 w-5 fill-white stroke-white" />
          )}
        </button>
      </div>
      <div className="md:hidden ml-3">
        <NavbarDropdown />
      </div>
    </header>
  );
}

export default Header;
