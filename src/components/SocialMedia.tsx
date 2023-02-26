import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMediaLinks } from '../utils';

function SocialMedia() {
  return (
    <div className="flex flex-col space-y-2">
      {socialMediaLinks.map(({ icon, ref, text }) => (
        <a
          className="flex text-cyan-500 dark:text-cyan-300 items-center hover:underline underline-offset-4 decoration-blue-600 dark:decoration-pink-500"
          href={ref}
          key={text}
        >
          <FontAwesomeIcon className="mr-4 text-lg" icon={icon} />
          <span className="font-medium">{text}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
