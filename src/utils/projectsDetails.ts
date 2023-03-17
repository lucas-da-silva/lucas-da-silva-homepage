import { IProjectDetails } from '../interfaces';

const projectsDetails: IProjectDetails[] = [
  {
    images: ['/projects/trivia.png'],
    title: 'Jogo Trivia',
    describe:
      'Jogo de perguntas e respostas desenvolvido em grupo, com integração ao Gravatar para recuperar a foto do usuário, pontuação a cada acerto e ranking ao final do jogo.',
    stacks: ['React', 'Redux', 'Jest', 'Bulma'],
    platforms: ['Web'],
    website: 'https://lucas-da-silva.github.io/trivia-game/',
    source: 'https://github.com/lucas-da-silva/game-trivia'
  },
  {
    images: ['/projects/recipes-app-2.png', '/projects/recipes-app-3.png'],
    title: 'App de receitas',
    describe:
      'App de receitas agrupa os ingredientes e as instruções para realizar comidas e bebidas, com a interface desenvolvida para mobile. Foi desenvolvido em equipe utilizando metodologias ágeis.',
    stacks: ['React', 'Context', 'React Testing Library'],
    platforms: ['Web', 'Android'],
    website: 'https://lucas-da-silva.github.io/recipes-app/',
    source: 'https://github.com/lucas-da-silva/recipes-app'
  },
  {
    images: ['/projects/trybe-soccer-club.png'],
    title: 'Trybe Soccer Club',
    describe:
      'Aplicação de futebol que é possível visualizar partidas e ranking de times de futebol. Além de ter sido criado uma API que consome um banco de dados para armazenar as informações da partida.',
    stacks: ['NodeJS', 'ExpressJS', 'MySQL', 'Sequelize'],
    source: 'https://github.com/lucas-da-silva/api-trybe-soccer-club',
    video: '/videos/trybe-soccer-club.mp4'
  },
  {
    images: ['/projects/trybewallet.png'],
    title: 'Trybewallet',
    describe:
      'Carteira virtual onde é possível adicionar, editar e remover os gastos em diversas moedas disponíveis por uma tabela com todos os gastos convertidos para Real.',
    stacks: ['React', 'Redux', 'Jest', 'React Testing Library', 'Bootstrap'],
    platforms: ['Web'],
    website: 'https://lucas-da-silva.github.io/trybewallet/',
    source: 'https://github.com/lucas-da-silva/trybewallet'
  },
  {
    images: ['/projects/tryunfo.png'],
    title: 'Jogo Tryunfo',
    describe:
      'Jogo de criar baralhos com temas livre, sendo possível filtrar e excluir as carta criadas.',
    stacks: ['React'],
    website: 'https://lucas-da-silva.github.io/tryunfo-game/',
    source: 'https://github.com/lucas-da-silva/tryunfo-game'
  },
  {
    images: ['/projects/car-shop.png'],
    title: 'Car Shop',
    describe:
      'API para gerenciar uma loja de veículos, criada seguindo os princípios de POO, desenvolvimento orientado a comportamentos (BDD) e utilizando o MongoDB como banco de dados',
    stacks: ['TypeScript', 'ExpressJS', 'MongoDB', 'Mongoose', 'Jest'],
    source: 'https://github.com/lucas-da-silva/api-car-shop'
  }
];

export default projectsDetails;
