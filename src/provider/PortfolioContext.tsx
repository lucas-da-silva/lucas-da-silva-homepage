import { createContext } from 'react';
import IPortfolioContext from '../interfaces/IPortfolioContext';

const PortfolioContext = createContext<IPortfolioContext | null>(null);

export default PortfolioContext;
