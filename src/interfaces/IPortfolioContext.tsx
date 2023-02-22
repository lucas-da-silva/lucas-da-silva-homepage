interface IPortfolioContext {
  currentPage: string;
  changePage(page: string): void;
}

export default IPortfolioContext;
