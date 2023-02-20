import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  
  if (localStorage.isLightMode) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </section>
  );
}

export default App;
