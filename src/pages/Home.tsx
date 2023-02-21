import { Navbar } from '../components';
import Technologies from '../components/Technologies';

function Home() {
  return (
    <section>
      <div className="flex justify-center h-screen sm:px-14">
        <div className="flex flex-col w-full bg-white dark:bg-zinc-900 max-w-7xl lg:px-10 px-4 border-x border-zinc-100 dark:border-zinc-800">
          <Navbar />
          <main className="flex flex-col mt-10">
            <div className="mb-6">
              <img
                className="w-16 h-16 left-0 top-3 transition-opacity rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                src="/self/photo.jpg"
                alt="Lucas da Silva"
              />
            </div>
            <div className="dark:text-white max-w-3xl">
              <h1 className="text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Desenvolvedor Full Stack
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Sou o Lucas, um desenvolvedor Full Stack morando no Amapá. Sou
                apaixonado por tecnologias, estou sempre estudando e
                desenvolvendo aplicações, sendo meu objetivo desenvolver
                aplicações que impactam positivamente e agregam valor a quem as
                consome.
              </p>
            </div>
            <Technologies />
          </main>
        </div>
      </div>
    </section>
  );
}

export default Home;
