import { useContext, useEffect } from 'react';
import { Header, IconLinks } from '../components';
import { IPortfolioContext } from '../interfaces';
import PortfolioContext from '../provider/PortfolioContext';

function About() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;

  useEffect(() => {
    changePage('/about');
  }, []);

  return (
    <section className="mb-20">
      <Header />
      <main className="flex flex-col lg:flex-row lg:justify-between mt-24">
        <div className="order-1 lg:order-0 lg:w-8/12">
          <h1 className="text-4xl font-bold mb-8 text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Sou o Lucas da Silva, um apaixonado por criar aplicações digitais
            que deseja.
          </h1>
          <div className="text-zinc-600 dark:text-zinc-400 space-y-5">
            <p>
              Tecnologia está presente no meu dia a dia desde a minha infância,
              onde aos 8 anos tive contato com videogame, por meio desse
              aparelho tive experiências incríveis e pude criar amizades.
            </p>
            <p>
              Passei os próximos anos estudando conteúdos escolares pela
              internet enquanto pude interagir pessoas de locares diversos
              através da internet, onde aprendi muito e mudou a minha visão
              sobre a tecnologia. Nesse momento que eu tinha 16 anos, comecei a
              pesquisar e a nutrir o interesse em desenvolver aplicações que
              facilitam interações sociais.
            </p>
            <p>
              Aos 18 anos decide que iria trabalhar como desenvolvedor, sendo o
              início dos meus estudos focado em programação web. Nos anos
              seguintes, estudei por cursos, documentação e livros, sempre
              desenvolvendo projetos tanto individuais quanto em grupo.
            </p>
            <p>
              Hoje, atuo como freelancer, além de buscar empresas que tenham o
              interesse em desenvolver produtos que impactam positivamente os
              clientes.
            </p>
          </div>
        </div>
        <div className="flex ml-3 mb-5 items-center order-0 lg:ml-16 lg:order-1 lg:flex-col lg:w-3/12">
          <img
            className="w-48 h-48 lg:w-60 lg:h-60 transition-opacity rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
            src="/self/photo.png"
            alt="Lucas da Silva"
          />
          <div className="hidden lg:flex mt-10">
            <IconLinks />
          </div>
        </div>
        <div className="lg:hidden order-3 self-center mt-12">
          <IconLinks />
        </div>
      </main>
    </section>
  );
}

export default About;
