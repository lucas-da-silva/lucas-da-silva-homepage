import { useState } from 'react';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }: { children: JSX.Element }) {
  const [currentPage, setCurrentPage] = useState('/');

  const changePage = (page: string) => setCurrentPage(page);

  const contextType = {
    currentPage,
    changePage,
  };

  return (
    <PortfolioContext.Provider value={contextType}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;
