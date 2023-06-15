import { inject } from '@vercel/analytics';
import PageRoutes from './PageRoutes';
import { Footer } from './components';
import PortfolioProvider from './provider/PortfolioProvider';
 
inject();

function App() {
  if (localStorage.isLightMode) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  return (
    <PortfolioProvider>
      <div className="flex justify-center min-h-screen md:px-14">
        <div className="flex flex-col justify-between w-full bg-white dark:bg-zinc-900 max-w-7xl border-x border-zinc-100 dark:border-zinc-800">
          <div className="lg:px-10 px-4">
            <PageRoutes />
          </div>
          <div className="mb-12">
            <Footer />
          </div>
        </div>
      </div>
    </PortfolioProvider>
  );
}

export default App;
