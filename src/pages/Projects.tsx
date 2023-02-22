import { useContext } from 'react';
import { Header, ProjectCard } from '../components';
import { IPortfolioContext } from '../interfaces';
import PortfolioContext from '../provider/PortfolioContext';

function Projects() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;
  changePage('/projects');

  return (
    <section>
      <Header />
      <main className="mt-28">
        <div className="dark:text-white max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Projetos
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Trabalhei em diversos projetos ao longo dos últimos anos, alguns
            mais simples e outros mais complexos, sendo esses os que estão aqui
            os que mais tive mais prazer em desenvolver.
          </p>
        </div>
        <div>
          <ProjectCard />
        </div>
      </main>
    </section>
  );
}

export default Projects;
