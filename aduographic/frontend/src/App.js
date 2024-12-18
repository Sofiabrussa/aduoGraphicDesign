import { Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import SectionPortafolio from './components/SectionPortafolio/SectionPortafolio';
import SectionNosotras from './components/SectionNosotras/SectionNosotras';
import SectionCards from './components/SectionCards/SectionCards';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MiFuentePersonalizada2';
    src: url('/fonts/pastel_crayon/pastelcrayon.ttf') format('truetype');
  }

  @font-face {
    font-family: 'MiFuentePersonalizada';
    src: url('/fonts/handodle(1)/Handodle.ttf') format('truetype');
  }

  :root {
    --font-hand: 'MiFuentePersonalizada';
    --font-pastel: 'MiFuentePersonalizada2';
  }`;



function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Inicio id="inicio"/>
      <SectionPortafolio id="servicios"/>
      <SectionNosotras id="nosotras"/>
      <SectionCards id="cards"/>
      <Contacto id="contacto"></Contacto>
      <Footer/>
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
