import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectsPage, AboutPage } from './pages';

function App() {
  if (localStorage.isLightMode) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  return (
    <div className="flex justify-center h-full sm:px-14">
      <div className="flex flex-col w-full bg-white dark:bg-zinc-900 max-w-7xl lg:px-10 px-4 border-x border-zinc-100 dark:border-zinc-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
