import "./LandingCreative.css";
import PortfolioCard from "./PortfolioCard";
import ProjectDialog from "./ProjectDialog";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "aurora",
    title: "AURORA",
    img: "/proyects/aurora/uno.webp",
    orientation: "horizontal",
    gallery: [
    "/proyects/aurora/dos.webp",
    "/proyects/aurora/tres.webp",
    "/proyects/aurora/cuatro.webp",
    "/proyects/aurora/cinco.webp",
    "/proyects/aurora/seis.webp"],
  
    description: `Nace desde un lugar profundamente personal y familiar: un nombre heredado, amado y elegido con convicción. Esa misma conexión emocional se convierte en el corazón de la marca: un espacio pensado para que cada mujer encuentre prendas que resalten su fuerza, su elegancia y su feminidad, sin renunciar a la comodidad ni a su propia esencia.
    \n La idea central es posicionar a Aurora como un universo sofisticado, donde cada prenda —desde lo cotidiano hasta lo íntimo— transmite seguridad, estilo y presencia. `

  },
  {
    id: "efe",
    title: "EFE ELECTRONICA",
    img: "/proyects/efe/efe1.webp",
    orientation: "horizontal",
    gallery: [
    "/proyects/efe/efe2.webp",
    "/proyects/efe/efe3.webp",
    "/proyects/efe/efe4.webp",
    "/proyects/efe/efe5.webp",],
    description: `Efe electrónica se posiciona como un servicio técnico automotriz especializado, liderado por el Ing. Electrónico Federico Navarro, con un enfoque profesional, preciso y totalmente orientado a la confianza del cliente.
    \n La marca combina conocimiento técnico, experiencia real en diagnóstico y reparación electrónica automotriz, y una atención cercana que explica, asesora y acompaña en cada caso.`
  },
  {
    id: "esquinas",
    title: "4 ESQUINAS",
    img: "/proyects/esquinas/esquina1.webp",
    orientation: "horizontal",
    gallery: [
    "/proyects/esquinas/esquina2.webp",
    "/proyects/esquinas/esquina3.webp",
    "/proyects/esquinas/esquina4.webp",
    "/proyects/esquinas/esquina5.webp",
    "/proyects/esquinas/papeleria.webp"],
    description: ` Nace del valor simbólico y estratégico de ubicarse en una de las intersecciones más importantes de Manantiales 2. Su nombre refleja directamente ese punto donde la vida del barrio sucede y se conecta.
    Es un complejo comercial compuesto por 8 locales y 2 oficinas.
    \n La marca se imagina colorida, llamativa y vibrante, un espacio que invita a pasar, quedarse y volver. Su esencia combina practicidad y disfrute`
  },
  {
    id: "LIHUE",
    title: "LIHUE",
    img: "/proyects/lalihue/lihue1.webp",
    orientation: "horizontal",
    gallery: [
    "/proyects/lalihue/lihue2.webp",
    "/proyects/lalihue/lihue3.webp",
    "/proyects/lalihue/lihue4.webp",
    "/proyects/lalihue/lihue5.webp",
    "/proyects/lalihue/lihue6.webp"],
    description:  ` Partimos del significado profundo de La Lihue —tierra fértil— para construir una identidad que combina origen, tradición y una nueva mirada contemporánea.
    \n La idea se centra en transformar a La Lihue en un refugio urbano: un espacio tranquilo en medio del movimiento de la ciudad, donde comer algo rico se vuelve una pausa consciente. Un lugar con estética armoniosa, productos diseñados con sensibilidad y un clima que invita a quedarse: trabajar, descansar, compartir, crear.`  
  },
  {
    id: "sonora",
    title: "SONORA",
    img: "/proyects/sonora/sonora1.png",
    orientation: "vertical",
    gallery: [
    "/proyects/sonora/sonora1.webp",
    "/proyects/sonora/sonora3.webp",
    "/proyects/sonora/sonora4.webp",
    "/proyects/sonora/sonora5.jpg",],
    description: "Proyecto editorial y visual."
  },
  {
    id: "boris",
    title: "BORIS",
    img: "/proyects/boris/boris2.webp",
    orientation: "vertical",
    gallery: [
    "/proyects/boris/boris1.webp",
    "/proyects/boris/boris3.webp",
    "/proyects/boris/boris4.webp",
    "/proyects/boris/boris5.webp",],
    description: `Desarrollamos la identidad de BORIS, una marca de café inspirada en un conejo real y en todo lo que representa: lealtad, alegría y autenticidad.
    \n El proyecto integra dos mundos bajo una misma esencia: Boris Café de Especialidad, un espacio trendy, minimalista y chill; y Boris Estudio, un centro profesional dedicado a la formación, investigación y cultura del café.`
  },
  {
    id: "luz",
    title: "LUZ ALIGNERS",
    img: "/proyects/luz/luz1.webp",
    orientation: "vertical",
    gallery: [
    "/proyects/luz/luz2.webp",
    "/proyects/luz/luz3.webp",
    "/proyects/luz/luz4.webp",
    "/proyects/luz/luz5.webp",],
    description: `Desarrollamos la identidad visual del consultorio particular de Luz González, un espacio odontológico que busca transmitir calidez, humanidad y profesionalismo. La marca representa una atención cercana, empática y moderna, donde el paciente puede atenderse sin miedos y sentirse acompañado en cada paso. `
  },
  {
    id: "ABC",
    title: "ABC",
    img: "/proyects/abc/abc1.webp",
    orientation: "horizontal",
    gallery: [
    "/proyects/abc/abc2.webp",
    "/proyects/abc/abc3.webp",
    "/proyects/abc/abc5.webp",
    "/proyects/abc/abc6.webp",
    "/proyects/abc/abc7.webp",
    "/proyects/abc/abc4.webp",],
    description: `ABC Cripto se construye desde un propósito simple pero poderoso: hacer que el mundo cripto sea comprensible para todos, sin tecnicismos, sin miedos y sin barreras. La marca se posiciona como ese “primer paso” que todos necesitan para entrar a un universo que parece complejo, pero que, explicado con claridad, puede transformar realidades económicas.
 \n La idea central es convertir a ABC Cripto en el profesor confiable y cercano del mundo cripto, alguien que enseña desde cero, acompaña, traduce lo difícil en simple y crea comunidad. Un espacio donde aprender es fácil, accesible y seguro, y donde cualquier persona —sin importar su nivel— puede sentirse parte.`
  },
  {
    id: "lutz",
    title: "LUTZ",
    img: "/proyects/lutz/lutz1.webp",
    orientation: "horizontal",
    gallery: [
    "/proyects/lutz/lutz1.webp",
    "/proyects/lutz/lutz2.webp",
    "/proyects/lutz/lutz3.webp",
    "/proyects/lutz/lutz4.webp",
    "/proyects/lutz/lutz5.webp",
    "/proyects/lutz/lutz7.webp",
    "/proyects/lutz/lutz6.webp",],
    description: `Lutz Ferrando es la óptica más antigua de Argentina, con un legado que inicia en 1878 cuando inmigrantes alemanes e italianos se unieron para crear el primer instituto óptico del país.   
    \n Su propuesta se basa en ofrecer soluciones ópticas de excelencia, combinando tecnología, salud visual, moda y una atención personalizada que potencia la autoestima y el estilo de cada cliente.   
    \n La personalidad de la marca es disciplinada, competitiva, segura y apasionada, transmitiendo tres pilares fundamentales: calidad, estilo y fortaleza.`
  }
];

export default function LandingCreative() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const words = document.querySelectorAll(".glitch-word");
    let glitching = false;

    function startGlitch() {
      if (glitching) return;
      glitching = true;

      const randomWord = words[Math.floor(Math.random() * words.length)];
      randomWord.classList.add("glitch-active");

      const duration = 1200;

      setTimeout(() => {
        randomWord.classList.remove("glitch-active");
        glitching = false;

        const wait = 1000 + Math.random() * 2000;
        setTimeout(startGlitch, wait);
      }, duration);
    }

    startGlitch();
  }, []);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="creative-page">

        {/* ===== HERO ===== */}
        <section className="hero-section">
          <svg
            className="hero-svg"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="wave-1" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.004 0.003"
                  numOctaves="3"
                  seed="2"
                  result="noise"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="9s"
                    values="0.004 0.003; 0.006 0.005; 0.003 0.002; 0.004 0.003"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" />
              </filter>
            </defs>

            {/* IZQUIERDA */}
            <g className="wave-up">
              <text x="35%" y="110" textAnchor="middle" className="hero-text hero-text-top">
                <tspan className="glitch-word">NO </tspan>
                <tspan className="glitch-word">HAY </tspan>
                <tspan className="glitch-word">DOS</tspan>
              </text>

              <text x="30%" y="210" textAnchor="middle" className="hero-text hero-text-middle">
                <tspan className="glitch-word">NO </tspan>
                <tspan className="glitch-word">HAY </tspan>
                <tspan className="glitch-word">DOS</tspan>
              </text>

              <text x="35%" y="310" textAnchor="middle" className="hero-text hero-text-bottom">
                <tspan className="glitch-word">NO </tspan>
                <tspan className="glitch-word">HAY </tspan>
                <tspan className="glitch-word">DOS</tspan>
              </text>
            </g>

            {/* DERECHA */}
            <g className="wave-down">
              <text x="70%" y="110" textAnchor="middle" className="hero-text hero-text-top">
                <tspan className="glitch-word">SIN </tspan>
                <tspan className="glitch-word">TRES</tspan>
              </text>

              <text x="75%" y="210" textAnchor="middle" className="hero-text hero-text-middle">
                <tspan className="glitch-word">SIN </tspan>
                <tspan className="glitch-word">TRES</tspan>
              </text>

              <text x="70%" y="310" textAnchor="middle" className="hero-text hero-text-bottom">
                <tspan className="glitch-word">SIN </tspan>
                <tspan className="glitch-word">TRES</tspan>
              </text>
            </g>
          </svg>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section className="portfolio-section">
          <div className="grid-row grid-horizontal">
            {projects
              .filter(p => p.orientation === "horizontal")
              .map((p) => (
                <PortfolioCard
                  key={p.id}
                  img={p.img}
                  title={p.title}
                  onClick={() => handleOpen(p)}
                />
              ))}
          </div>

          <div className="grid-row grid-vertical">
            {projects
              .filter(p => p.orientation === "vertical")
              .map((p) => (
                <PortfolioCard
                  key={p.id}
                  img={p.img}
                  title={p.title}
                  orientation="vertical"
                  onClick={() => handleOpen(p)}
                />
              ))}
          </div>
        </section>
      </div>

      {/* ===== MODAL  ===== */}
      <ProjectDialog
        open={open}
        onClose={handleClose}
        project={selectedProject}
      />
    </>
  );
}

