import { Header } from '../components';
import { projectsDetails, projects } from '../utils';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import PortfolioContext from '../provider/PortfolioContext';
import { IPortfolioContext, IProject, IProjectDetails } from '../interfaces';

function ProjectDetails() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;
  const { projectName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!projects.some(({ pageDetails }) => pageDetails === projectName)) {
      navigate('/not-found');
    }
    changePage('');
  }, []);

  const project = projects.find(
    ({ pageDetails }) => pageDetails === projectName
  ) as IProject;

  const { title, images, describe, stacks, website, platform, source, video } =
    projectsDetails.find(
      ({ title }) => title === project.title
    ) as IProjectDetails;

  return (
    <section className="mb-24">
      <Header />
      <main className="mt-24">
        <div className="flex items-center dark:text-white mb-4">
          <Link
            className="text-lg text-cyan-300 dark:text-cyan-300 hover:underline decoration-cyan-300 underline-offset-4"
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
        <div className="flex flex-wrap text-zinc-600 dark:text-zinc-400">
          <p>{describe}</p>
        </div>
        <div className="flex flex-col space-y-2 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-6">
          {website && (
            <div className="flex items-center">
              <span className="p-1 rounded-2xl bg-cyan-300 mr-2 font-medium">
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
          {platform && (
            <div className="flex items-center">
              <span className="p-1 rounded-2xl bg-cyan-300 mr-2 font-medium">
                Plataforma
              </span>
              <p className="text-zinc-600 dark:text-zinc-400">
                {platform.join('/')}
              </p>
            </div>
          )}
          <div className="flex items-center">
            <span className="p-1 rounded-2xl bg-cyan-300 mr-2 font-medium">
              Tecnologia
            </span>
            <p className="text-zinc-600 dark:text-zinc-400">
              {stacks.join(', ')}
            </p>
          </div>
          <div className="flex items-center">
            <span className="p-1 rounded-2xl bg-cyan-300 mr-2 font-medium">
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
          {images.map((image) => (
            <img
              src={image}
              className="rounded-2xl border border-zinc-50 dark:border-zinc-900"
              key={image}
            />
          ))}
          {video && (
            <video className="w-full rounded-2xl border border-zinc-50 dark:border-zinc-900" controls muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video format
            </video>
          )}
        </div>
      </main>
    </section>
  );
}

export default ProjectDetails;
