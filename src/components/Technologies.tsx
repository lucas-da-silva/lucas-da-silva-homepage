import { Link } from 'react-router-dom';

function Technologies() {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-10">
      <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-5">
        Tecnologias
      </h3>
      <div className="flex justify-between mb-6 space-x-10">
        <div className="w-1/2 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 text-zinc-900 text-sm font-semibold dark:text-zinc-100">
          <h4>Front End</h4>
          <div className="flex flex-wrap justify-center mt-4 space-x-2">
            <a href="https://www.javascript.com/">
              <img
                src="/technologies-logo/javascript.svg"
                alt="JavaScript"
                className="w-10 h-10"
              />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="/technologies-logo/css-3.svg"
                alt="CSS 3"
                className="w-10 h-10"
              />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <img
                src="/technologies-logo/html.svg"
                alt="HTML 5"
                className="w-10 h-10"
              />
            </a>
            <a href="https://reactjs.org/">
              <img
                src="/technologies-logo/react.svg"
                alt="React"
                className="w-10 h-10"
              />
            </a>
            <a href="https://redux.js.org/">
              <img
                src="/technologies-logo/redux.svg"
                alt="Redux"
                className="w-10 h-10"
              />
            </a>
            <a href="https://jestjs.io/">
              <img
                src="/technologies-logo/jest.svg"
                alt="Jest"
                className="w-10 h-10"
              />
            </a>
            <a href="https://tailwindcss.com/">
              <img
                src="/technologies-logo/tailwindcss.svg"
                alt="Tailwindcss"
                className="w-10 h-10"
              />
            </a>
            <a href="https://getbootstrap.com/">
              <img
                src="/technologies-logo/bootstrap-5.svg"
                alt="Bootstrap 5"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
        <div className="w-1/2 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 text-zinc-90 text-sm font-semibold dark:text-zinc-100">
          <h4 className="ml-3">Back end</h4>
          <div className="flex flex-wrap justify-center mt-4 space-x-2">
            <a href="https://nodejs.org/en/">
              <img
                src="/technologies-logo/nodejs.svg"
                alt="Nodejs"
                className="w-10 h-10"
              />
            </a>
            <a href="https://expressjs.com/">
              <img
                src="/technologies-logo/expressjs.svg"
                alt="Express.js"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.mysql.com/">
              <img
                src="/technologies-logo/mysql.svg"
                alt="MySQL"
                className="w-10 h-10"
              />
            </a>
            <a href="https://sequelize.org/">
              <img
                src="/technologies-logo/sequelizejs.svg"
                alt="Sequelize"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.typescriptlang.org/">
              <img
                src="/technologies-logo/typescript.svg"
                alt="TypeScript"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.mongodb.com/">
              <img
                src="/technologies-logo/mongodb.svg"
                alt="MongoDB"
                className="w-10 h-10"
              />
            </a>
            <a href="https://mongoosejs.com/">
              <img
                src="/technologies-logo/mongoose.svg"
                alt="Mongoose"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>
      <button className="w-64 self-center rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:ring-zinc-200 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
        <Link
          className="text-zinc-800 px-3 py-2 mx-1 rounded-md text-sm font-medium hover:text-cyan-300 dark:hover:text-cyan-300 dark:text-zinc-200"
          to="/projetos"
        >
          Ver projetos
        </Link>
      </button>
    </div>
  );
}

export default Technologies;
