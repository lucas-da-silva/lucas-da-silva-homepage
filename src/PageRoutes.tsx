import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  ProjectsPage,
  AboutPage,
  ProjectDetailsPage,
  NotFoundPage,
} from './pages';
import { projects } from './utils';
function PageRoutes() {
  return (
    <Routes>
      {projects.map(({ pageDetails }) => (
        <Route
          path={`/projects/${pageDetails}`}
          element={<ProjectDetailsPage projectName={pageDetails} />}
          key={pageDetails}
        />
      ))}
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default PageRoutes;
