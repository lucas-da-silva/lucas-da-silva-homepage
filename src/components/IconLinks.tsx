import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMediaLinks } from '../utils';

function IconLinks() {
  return (
    <div className="flex space-x-9">
      {socialMediaLinks.map(({ icon, ref }) => (
        <a
          className="flex text-zinc-500 dark:text-zinc-400 items-center hover:text-cyan-300 dark:hover:text-cyan-300"
          href={ref}
        >
          <FontAwesomeIcon className="text-lg" icon={icon} />
        </a>
      ))}
    </div>
  );
}

export default IconLinks;
