import {
  Header,
  Technologies,
  Biography,
  SocialMedia,
  HomeTitle,
} from '../components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { IPortfolioContext } from '../interfaces';
import PortfolioContext from '../provider/PortfolioContext';

function Home() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;
  changePage('/');

  return (
    <section className="mb-28">
      <Header />
      <main className="flex flex-col mt-24">
        <HomeTitle />
        <Technologies />
        <Biography />
        <div className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-8">
          <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            Eu {<FontAwesomeIcon className="text-red-500" icon={faHeart} />}
          </h3>
          <div>
            <p className="text-zinc-600 dark:text-zinc-400">
              Video games, Ler, <strong>Programar</strong>, Músicas, Animes
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-8">
          <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            Redes Sociais
          </h3>
          <SocialMedia />
        </div>
      </main>
    </section>
  );
}

export default Home;
