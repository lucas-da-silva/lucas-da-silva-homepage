import { Header, ProjectDetailsCard } from '../components';
import { projectsDetails, projects } from '../utils';
import { useContext, useEffect } from 'react';
import PortfolioContext from '../provider/PortfolioContext';
import { IPortfolioContext, IProject, IProjectDetails } from '../interfaces';

function ProjectDetails({ projectName }: { projectName: string }) {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;

  useEffect(() => {
    changePage('');
  }, []);

  const project = projects.find(
    ({ pageDetails }) => pageDetails === projectName
  ) as IProject;
  const projectDetails = projectsDetails.find(
    ({ title }) => title === project.title
  ) as IProjectDetails;

  return (
    <section className="mb-24">
      <Header />
      <main className="mt-24">
        <ProjectDetailsCard project={projectDetails as IProjectDetails} />
      </main>
    </section>
  );
}

export default ProjectDetails;
