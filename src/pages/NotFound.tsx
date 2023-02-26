import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import { IPortfolioContext } from '../interfaces';
import PortfolioContext from '../provider/PortfolioContext';

function NotFound() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;

  useEffect(() => {
    changePage('');
  }, []);

  return (
    <section className="mb-24">
      <Header />
      <main className="flex flex-col items-center mt-28">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 lg:text-5xl">
            Não encontrado
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            A página que você está procurando não foi encontrada.
          </p>
        </div>
        <div>
          <button className="py-2 text-zinc-100 dark:text-zinc-800 w-52 self-center rounded-2xl bg-cyan-500 dark:bg-cyan-300 shadow-lg shadow-zinc-800/5 ring-1 ring-cyan-200 backdrop-blur transition hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-zinc-50 dark:hover:text-zinc-900">
            <Link className="font-medium" to="/">
              Retornar para o início
            </Link>
          </button>
        </div>
      </main>
    </section>
  );
}

export default NotFound;
