import { classNames } from '../utils';

function ProjectDetailsImages({
  images,
  mobile
}: {
  images: string[];
  mobile: boolean | undefined;
}) {
  return (
    <div
      className={classNames(
        mobile ? 'md:space-x-4 md:flex-row space-y-6 md:space-y-0' : '',
        'flex flex-col items-center'
      )}
    >
      {images.map(image => (
        <img
          src={image}
          className={classNames(
            mobile ? 'md:w-1/2' : '',
            'rounded-2xl border border-zinc-50 dark:border-zinc-900'
          )}
          key={image}
        />
      ))}
    </div>
  );
}

export default ProjectDetailsImages;
