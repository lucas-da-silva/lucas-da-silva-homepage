import { IProject } from '../interfaces';

const projects: IProject[] = [
  {
    img: '/projects/wallet.png',
    title: 'Wallet',
    describe:
      'Carteira virtual onde é possível realizar diversas operações com gastos',
    pageDetails: 'wallet'
  },
  {
    img: '/projects/trivia.png',
    title: 'Jogo Trivia',
    describe: 'Jogo de perguntas e respostas, semelhante ao Show do milhão',
    pageDetails: 'trivia'
  },
  {
    img: '/projects/recipes-app.png',
    title: 'App de receitas',
    describe: 'Aplicativo de receitas de comidas e bebidas',
    pageDetails: 'recipesapp'
  },
  {
    img: '/projects/trybe-soccer-club.png',
    title: 'Trybe Soccer Club',
    describe:
      'Aplicação de futebol que possui um ranking e partidas de times de futebol',
    pageDetails: 'soccerclub'
  },
  {
    img: '/projects/tryunfo.png',
    title: 'Jogo Tryunfo',
    describe: 'Jogo de criar baralhos com temas livre, no estilo Super Trunfo',
    pageDetails: 'tryunfo'
  },
  {
    img: '/projects/car-shop.png',
    title: 'Car Shop',
    describe: 'API para gerenciar uma loja de veículos',
    pageDetails: 'carshop'
  }
];

export default projects;
