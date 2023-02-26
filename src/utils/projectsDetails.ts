import { IProjectDetails } from '../interfaces';

const projectsDetails: IProjectDetails[] = [
  {
    images: ['/projects/trivia.png'],
    title: 'Jogo Trivia',
    describe: 'Jogo de perguntas e respostas, semelhante ao Show do milhão',
    stacks: ['React', 'Redux', 'Jest'],
    website: 'https://lucas-da-silva.github.io/trivia-game/',
    source: 'https://github.com/lucas-da-silva/game-trivia',
  },
  {
    images: ['/projects/recipes-app.png'],
    title: 'App de receitas',
    describe: 'Aplicativo de receitas de comidas e bebidas',
    stacks: ['React', 'Redux'],
    website: 'https://lucas-da-silva.github.io/recipes-app/',
    source: 'https://github.com/lucas-da-silva/recipes-app',
  },
  {
    images: ['/projects/tryber-soccer-club.png'],
    title: 'Trybe Soccer Club',
    describe:
      'Aplicação de futebol que possui um ranking e partidas de times de futebol',
    stacks: ['NodeJS', 'ExpressJS', 'MySQL', 'Sequelize'],
    source: 'https://github.com/lucas-da-silva/api-tryber-soccer-club',
    video: '/videos/tryber-soccer-club.mp4'
  },
  {
    images: ['/projects/trybewallet.png'],
    title: 'Trybewallet',
    describe:
      'Carteira virtual onde é possível realizar diversas operações com gastos',
    stacks: ['React', 'Redux'],
    website: 'https://lucas-da-silva.github.io/trybewallet/',
    source: 'https://github.com/lucas-da-silva/trybewallet',
  },
  {
    images: ['/projects/tryunfo.png'],
    title: 'Jogo Tryunfo',
    describe: 'Jogo de criar baralhos com temas livre, no estilo Super Trunfo',
    stacks: ['React'],
    website: 'https://lucas-da-silva.github.io/tryunfo-game/',
    source: 'https://github.com/lucas-da-silva/game-tryunfo',
  },
  {
    images: ['/projects/car-shop.png'],
    title: 'Car Shop',
    describe: 'API para gerenciar uma loja de veículos',
    stacks: ['NodeJS', 'ExpressJS', 'MongoDB'],
    source: 'https://github.com/lucas-da-silva/api-car-shop',
  },
];

export default projectsDetails;
