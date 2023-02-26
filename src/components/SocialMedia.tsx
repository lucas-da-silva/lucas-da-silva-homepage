import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMediaLinks } from '../utils';

function SocialMedia() {
  return (
    <div className="flex flex-col space-y-2">
      {socialMediaLinks.map(({ icon, ref, text }) => (
        <a
          className="flex text-zinc-600 dark:text-zinc-400 items-center hover:text-cyan-500 dark:hover:text-cyan-300"
          href={ref}
          key={text}
        >
          <FontAwesomeIcon className="mr-4 text-lg" icon={icon} />
          <span className="font-medium">
            {text}
          </span>
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
