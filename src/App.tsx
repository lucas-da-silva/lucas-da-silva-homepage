import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <section className='bg-black w-screen h-screen text-white'>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
      </Routes>
    </section>
  )
}

export default App;
