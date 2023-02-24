import { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import IPortfolioContext from '../interfaces/IPortfolioContext';
import PortfolioContext from '../provider/PortfolioContext';
import navbarLinks from '../utils/navbarLinks';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

function NavbarDropdown() {
  const { currentPage } = useContext(PortfolioContext) as IPortfolioContext;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 hover:ring-zinc-300 dark:hover:ring-zinc-600">
          <Bars3Icon className="h-6 w-6 stroke-gray-600 dark:stroke-white group-hover:stroke-cyan-300" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="text-sm font-medium absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-zinc-800/90 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {navbarLinks.map(({ path, text }) => (
              <Menu.Item key={text}>
                {({ active }) => (
                  <Link
                    to={path}
                    className={classNames(
                      active
                        ? 'bg-zinc-50 dark:bg-zinc-700 text-cyan-300'
                        : 'bg-white dark:bg-zinc-800/90',
                      currentPage === path
                        ? 'text-cyan-300'
                        : 'text-zinc-800 dark:text-zinc-200',
                      'flex px-4 py-2 text-sm'
                    )}
                  >
                    <p
                      className={
                        currentPage === path
                          ? `border-b border-cyan-300`
                          : undefined
                      }
                    >
                      {text}
                    </p>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default NavbarDropdown;
