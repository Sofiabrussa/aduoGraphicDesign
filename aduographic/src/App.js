import { Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';

function App() {
  return (
    <>
      <Navbar />
      <Inicio/>
      <div className='container text-center'>
        <Routes>
          {/*   <Route path='/' element={<Inicio></Inicio>} />
          <Route path='/albumes' element={<Albumes></Albumes>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
