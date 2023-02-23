import { IProject } from '../interfaces';

function ProjectCard({ img, title, describe }: IProject) {
  return (
    <div className="flex flex-col items-center text-center w-1/2">
      <div className='hover:bg-zinc-50 cursor-pointer'>
        <img
          className="w-80 h-48 border rounded-2xl mb-3"
          src={img}
          alt={title}
        />
        <h3 className="w-80 text-lg font-medium text-zinc-800 dark:text-zinc-100 mb-1">
          {title}
        </h3>
        <p className="w-80 text-zinc-600 dark:text-zinc-400">{describe}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
