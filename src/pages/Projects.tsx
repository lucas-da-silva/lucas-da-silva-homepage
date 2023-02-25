import { useContext, useEffect } from 'react';
import { Header, ProjectCard } from '../components';
import { IPortfolioContext } from '../interfaces';
import PortfolioContext from '../provider/PortfolioContext';
import { projects } from '../utils';

function Projects() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;

  useEffect(() => {
    changePage('/projects');
  }, []);

  return (
    <section className="mb-24">
      <Header />
      <main className="mt-24">
        <div className="dark:text-white max-w-4xl mb-10">
          <h1 className="text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Projetos
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Trabalhei em diversos projetos ao longo dos últimos anos, alguns
            mais simples e outros mais complexos, sendo esses a seguir são os
            que mais tive o prazer em desenvolver.
          </p>
        </div>
        <div className="flex justify-center flex-wrap">
          {projects.map(({ img, title, describe }) => (
            <ProjectCard
              img={img}
              title={title}
              describe={describe}
              key={title}
            />
          ))}
        </div>
      </main>
    </section>
  );
}

export default Projects;
