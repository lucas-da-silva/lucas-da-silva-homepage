import { Route, Routes } from 'react-router-dom';
import { HomePage,ProjectsPage, AboutPage } from './pages';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default PageRoutes;
