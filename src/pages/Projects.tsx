import { useContext, useEffect } from 'react';
import { Header, ProjectCard } from '../components';
import { IPortfolioContext } from '../interfaces';
import PortfolioContext from '../provider/PortfolioContext';

const projects = [
  {
    img: '/projects/trivia.png',
    title: 'Trivia',
    describe: 'Jogo de perguntas e respostas, semelhante ao Show do milhão',
  },
  {
    img: '/projects/recipes-app.png',
    title: 'App de receitas',
    describe: 'Aplicativo de receitas de comidas e bebidas',
  },
  {
    img: '/projects/tryber-soccer-club.png',
    title: 'Trybe Soccer Club',
    describe:
      'Aplicação de futebol que possui um ranking e partidas de times de futebol',
  },
  {
    img: '/projects/trybewallet.png',
    title: 'Trybewallet',
    describe:
      'Carteira virtual onde é possível realizar diversas operações com gastos',
  },
  {
    img: '/projects/tryunfo.png',
    title: 'Tryunfo',
    describe: 'Jogo de criar baralhos com temas livre, no estilo Super Trunfo',
  },
  {
    img: '/projects/car-shop.png',
    title: 'Car Shop',
    describe: 'API para gerenciar uma loja de veículos',
  },
];

function Projects() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;

  useEffect(() => {
    changePage('/projects');
  }, []);

  return (
    <section className="mb-24">
      <Header />
      <main className="mt-24">
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
