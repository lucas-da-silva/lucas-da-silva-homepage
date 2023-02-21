import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SocialMedia() {
  return (
    <div className="flex flex-col space-y-2">
      <a
        className="flex text-zinc-700 dark:text-zinc-400 items-center hover:text-cyan-300 dark:hover:text-cyan-300"
        href="https://github.com/Lucas-da-Silva" 
      >
        <FontAwesomeIcon className="mr-2" icon={faGithub} />{' '}
        <p>@lucas-da-silva</p>
      </a>
      <a
        className="flex text-zinc-700 dark:text-zinc-400 items-center hover:text-cyan-300 dark:hover:text-cyan-300"
        href="https://www.linkedin.com/in/lucasdasilvadev/"
      >
        <FontAwesomeIcon className="mr-2" icon={faLinkedin} /> @lucasdasilvadev
      </a>
      <a
        className="flex text-zinc-700 dark:text-zinc-400 items-center hover:text-cyan-300 dark:hover:text-cyan-300"
        href="mailto:lucasdasilvadev1@gmail.com"
      >
        <FontAwesomeIcon className="mr-2" icon={faEnvelope} />{' '}
        lucasdasilvadev1@gmail.com
      </a>
    </div>
  );
}

export default SocialMedia;
