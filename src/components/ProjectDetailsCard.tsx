import { Link } from 'react-router-dom';
import { IProjectDetails } from '../interfaces';
import ProjectDetailsImages from './ProjectDetailsImages';
import ProjectDetailsVideo from './ProjectDetailsVideo';

function ProjectDetailsCard({ project }: { project: IProjectDetails }) {
  const { title, images, describe, stacks, website, platforms, source, video } =
    project;

  const mobile =
    platforms &&
    platforms.some(platform => platform === 'Android' || platform === 'IOS');

  return (
    <div>
      <div className="flex items-center dark:text-white mb-4">
        <Link
          className="text-lg text-blue-600 dark:text-pink-500 hover:underline decoration-blue-600 dark:decoration-pink-500 underline-offset-4"
          to="/projects"
        >
          Projetos
        </Link>
        <span className="mx-2 text-sm text-zinc-600 dark:text-zinc-400">
          {'/'}
        </span>
        <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap text-zinc-600 dark:text-zinc-400 lg:w-10/12">
        <p>{describe}</p>
      </div>
      <div className="flex flex-col space-y-2 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-6">
        {website && (
          <div className="flex items-center">
            <span className="text-cyan-50 dark:text-cyan-900 p-1 rounded-2xl bg-cyan-500 dark:bg-cyan-300 mr-2 font-semibold">
              Site
            </span>
            <a
              className="text-blue-600 dark:text-pink-500 hover:underline decoration-blue-600 dark:decoration-pink-500 underline-offset-4"
              href={website}
            >
              {website}
            </a>
          </div>
        )}
        {platforms && (
          <div className="flex items-center">
            <span className="text-cyan-50 dark:text-cyan-900 p-1 rounded-2xl bg-cyan-500 dark:bg-cyan-300 mr-2 font-semibold">
              Plataforma
            </span>
            <p className="text-zinc-600 dark:text-zinc-400">
              {platforms.join('/')}
            </p>
          </div>
        )}
        <div className="flex items-center">
          <span className="text-cyan-50 dark:text-cyan-900 p-1 rounded-2xl bg-cyan-500 dark:bg-cyan-300 mr-2 font-semibold">
            Tecnologia
          </span>
          <p className="text-zinc-600 dark:text-zinc-400">
            {stacks.join(', ')}
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-cyan-50 dark:text-cyan-900 p-1 rounded-2xl bg-cyan-500 dark:bg-cyan-300 mr-2 font-semibold">
            Fonte
          </span>
          <a
            className="text-blue-600 dark:text-pink-500 hover:underline decoration-blue-600 dark:decoration-pink-500 underline-offset-4"
            href={source}
          >
            {source}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 rounded-2xl border border-zinc-100 p-6 md:p-10 dark:border-zinc-700/40 mt-6">
        <ProjectDetailsImages images={images} mobile={mobile} />
        {video && <ProjectDetailsVideo video={video} />}
      </div>
    </div>
  );
}

export default ProjectDetailsCard;
