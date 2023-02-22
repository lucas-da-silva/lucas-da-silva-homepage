import { useContext } from 'react';
import { Header } from '../components';
import IPortfolioContext from '../interfaces/IPortfolioContext';
import PortfolioContext from '../provider/PortfolioContext';

function Projects() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;
  changePage('/projects');

  return (
    <section>
      <Header />
    </section>
  );
}

export default Projects;
