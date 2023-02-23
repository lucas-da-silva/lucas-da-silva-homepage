import IProject from './IProject';

interface IProjectDetails extends IProject {
  stacks: string[];
  website: string;
  largeDescription?: string;
  images?: string[];
}

export default IProjectDetails;
