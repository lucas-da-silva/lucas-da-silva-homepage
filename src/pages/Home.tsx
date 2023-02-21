import { Header, Technologies, Biography, SocialMedia } from '../components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <section>
      <Header />
      <main className="flex flex-col mt-10">
        <div className="mb-6">
          <img
            className="w-16 h-16 left-0 top-3 transition-opacity rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
            src="/self/photo.jpg"
            alt="Lucas da Silva"
          />
        </div>
        <div className="dark:text-white max-w-5xl">
          <h1 className="text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Desenvolvedor Full Stack
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Sou o Lucas, um desenvolvedor Full Stack morando no Amapá. Sou
            apaixonado por tecnologias, estou sempre estudando e desenvolvendo
            aplicações, sendo meu objetivo desenvolver aplicações que impactam
            positivamente e agregam valor a quem as consome.
          </p>
        </div>
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
