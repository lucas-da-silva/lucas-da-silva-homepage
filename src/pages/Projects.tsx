import { useContext } from 'react';
import { Header, ProjectCard } from '../components';
import { IPortfolioContext } from '../interfaces';
import PortfolioContext from '../provider/PortfolioContext';

const projects = [
  {
    img: '/projects/trybewallet.png',
    title: 'Trybewallet',
    describe:
      'Uma carteira virtual onde é possível realizar diversas operações com gastos',
  },
  {
    img: '/projects/recipes-app.png',
    title: 'App de receitas',
    describe:
      'Um aplicativo de receitas de comidas e bebidas desenvolvido em equipe',
  },
];

function Projects() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;
  changePage('/projects');

  return (
    <section>
      <Header />
      <main className="mt-28">
        <div className="dark:text-white max-w-4xl mb-16">
          <h1 className="text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Projetos
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Trabalhei em diversos projetos ao longo dos últimos anos, alguns
            mais simples e outros mais complexos, sendo esses os que estão aqui
            os que mais tive mais prazer em desenvolver.
          </p>
        </div>
        <div className="flex justify-between mb-6 sm:space-x-10">
          {projects.map(({ img, title, describe }) => (
            <ProjectCard img={img} title={title} describe={describe} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default Projects;
