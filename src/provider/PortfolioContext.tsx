import { createContext } from 'react';
import { IPortfolioContext } from '../interfaces';

const PortfolioContext = createContext<IPortfolioContext | null>(null);

export default PortfolioContext;
