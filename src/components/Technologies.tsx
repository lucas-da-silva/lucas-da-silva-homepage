import { Link } from 'react-router-dom';

const technologiesFrontEnd = [
  {
    ref: 'https://www.javascript.com/',
    path: '/javascript.svg',
    text: 'JavaScript',
  },
  {
    ref: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    path: '/css-3.svg',
    text: 'CSS 3',
  },
  {
    ref: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    path: '/html.svg',
    text: 'HTML 5',
  },
  {
    ref: 'https://reactjs.org/',
    path: '/react.svg',
    text: 'React.js',
  },
  {
    ref: 'https://redux.js.org/',
    path: '/redux.svg',
    text: 'Redux',
  },
  {
    ref: 'https://jestjs.io/',
    path: '/jest.svg',
    text: 'Jest',
  },
  {
    ref: 'https://tailwindcss.com/',
    path: '/tailwindcss.svg',
    text: 'Tailwindcss',
  },
  {
    ref: 'https://getbootstrap.com/',
    path: '/bootstrap-5.svg',
    text: 'Bootstrap 5',
  },
];

const technologiesBackEnd = [
  {
    ref: 'https://nodejs.org/en/',
    path: '/nodejs.svg',
    text: 'Nodejs',
  },
  {
    ref: 'https://expressjs.com/',
    path: '/expressjs.svg',
    text: 'Express.js',
  },
  {
    ref: 'https://www.mysql.com/',
    path: '/mysql.svg',
    text: 'MySQL',
  },
  {
    ref: 'https://sequelize.org/',
    path: '/sequelizejs.svg',
    text: 'Sequelize',
  },
  {
    ref: 'https://www.typescriptlang.org/',
    path: '/typescript.svg',
    text: 'TypeScript',
  },
  {
    ref: 'https://www.mongodb.com/',
    path: '/mongodb.svg',
    text: 'MongoDB',
  },
  {
    ref: 'https://mongoosejs.com/',
    path: '/mongoose.svg',
    text: 'Mongoose',
  },
];

function Technologies() {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-8">
      <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-5">
        Tecnologias
      </h3>
      <div className="sm:flex justify-between mb-6 sm:space-x-10">
        <div className="mb-6 sm:w-1/2 sm:mb-0 rounded-2xl border border-zinc-100 p-4 sm:p-5 dark:border-zinc-700/40 text-zinc-900 text-sm font-semibold dark:text-zinc-100">
          <h4>Front End</h4>
          <div className="flex flex-wrap justify-center mt-4 space-x-2">
            {technologiesFrontEnd.map(({ ref, path, text }) => (
              <a href={ref} key={text}>
                <img
                  src={`/technologies-logo${path}`}
                  alt={text}
                  className="w-10 h-10 mb-2"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="sm:w-1/2 rounded-2xl border border-zinc-100 p-4 sm:p-5 dark:border-zinc-700/40 text-zinc-900 text-sm font-semibold dark:text-zinc-100">
          <h4>Back end</h4>
          <div className="flex flex-wrap justify-center mt-4 space-x-2">
            {technologiesBackEnd.map(({ ref, path, text }) => (
              <a href={ref} key={text}>
                <img
                  src={`/technologies-logo${path}`}
                  alt={text}
                  className="w-10 h-10 mb-2"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <button className="py-2 text-zinc-100 dark:text-zinc-800 w-52 self-center rounded-2xl bg-cyan-500 dark:bg-cyan-300 shadow-lg shadow-zinc-800/5 ring-1 ring-cyan-200 backdrop-blur transition hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-zinc-50 dark:hover:text-zinc-900">
        <Link
          className="font-medium"
          to="/projects"
        >
          Meu portfólio
        </Link>
      </button>
    </div>
  );
}

export default Technologies;
