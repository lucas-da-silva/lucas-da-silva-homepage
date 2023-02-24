import { useContext, useEffect } from 'react';
import { Header } from '../components';
import { IPortfolioContext } from '../interfaces';
import PortfolioContext from '../provider/PortfolioContext';

function About() {
  const { changePage } = useContext(PortfolioContext) as IPortfolioContext;
  
  useEffect(() => {
    changePage('/about');
  }, []);

  return (
    <section>
      <Header />
    </section>
  );
}

export default About;
