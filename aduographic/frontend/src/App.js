import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import SectionPortafolio from './components/SectionPortafolio/SectionPortafolio';
import SectionNosotras from './components/SectionNosotras/SectionNosotras';
import SectionCards from './components/SectionCards/SectionCards';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import { createGlobalStyle } from 'styled-components';
import SectionBarra from './components/Servicios/SectionBarra/SectionBarra';
import SectionCarrousel from './components/SectionCarrousel/sectionCarrousel';
import LandingCreative from './components/LandingPortfolio/LandingCreative';
import Cursor from './lib/Cursor';

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

const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

function App() {
  return (
    <>
      <GlobalStyle />
      {!isTouch && <Cursor />}
      <Navbar />
      <div className="">
        {/* Renderizar los componentes solo en "/" */}
        <Routes>
          <Route path="/" element={
            <>
              <Inicio id="inicio" />
              <SectionPortafolio id="portfolio" />
              <SectionNosotras id="nosotras" />
              <SectionCards id="cards" />
              <SectionCarrousel/>
              <Contacto id="contacto" />
            </>
          } />
          <Route path="/servicios" element={<SectionBarra id="sectionBarra" />} />
          <Route path="/portfolio" element={<LandingCreative />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

