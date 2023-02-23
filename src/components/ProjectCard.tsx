import { IProject } from "../interfaces";

function ProjectCard({ img, title, describe }: IProject) {
  return (
    <div className="flex items-center text-center mb-8 mx-3">
      <div className="p-8 cursor-pointer hover:bg-zinc-50 hover:rounded-2xl dark:hover:bg-zinc-800">
        <img
          className="w-72 h-48 border border-zinc-100 dark:border-zinc-700 rounded-2xl mb-3"
          src={img}
          alt={title}
        />
        <h3 className="w-72 text-lg font-medium text-zinc-800 dark:text-zinc-100 mb-1">
          {title}
        </h3>
        <p className="w-72 text-zinc-600 dark:text-zinc-400">{describe}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
