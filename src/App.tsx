import { Route, Routes } from 'react-router-dom';
import { Footer } from './components';
import { HomePage, ProjectsPage, AboutPage } from './pages';

function App() {
  if (localStorage.isLightMode) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  return (
    <div className="flex justify-center h-full sm:px-14">
      <div className="flex flex-col w-full bg-white dark:bg-zinc-900 max-w-7xl border-x border-zinc-100 dark:border-zinc-800">
        <div className="lg:px-10 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <div className="mt-24 mb-16">
          <Footer />  
        </div>
      </div>
    </div>
  );
}

export default App;
