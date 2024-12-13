import { Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import SectionPortafolio from './components/SectionPortafolio/SectionPortafolio';
import SectionNosotras from './components/SectionNosotras/SectionNosotras';
import SectionCards from './components/SectionCards/SectionCards';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <Inicio id="inicio"/>
      <SectionPortafolio id="servicios"/>
      <SectionNosotras id="nosotras"/>
      <SectionCards id="cards"/>
      <Contacto></Contacto>
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
