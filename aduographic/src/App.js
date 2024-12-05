import { Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import SectionPortafolio from './components/SectionPortafolio/SectionPortafolio';

function App() {
  return (
    <>
      <Navbar />
      <Inicio/>
      <SectionPortafolio/>
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
