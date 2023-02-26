import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectsPage, AboutPage, ProjectDetailsPage } from './pages';
function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectName" element={<ProjectDetailsPage />} />
    </Routes>
  );
}

export default PageRoutes;
