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
    description: `Nace desde un lugar profundamente personal y familiar: un nombre heredado, amado y elegido con convicción. Esa misma conexión emocional se convierte en el corazón de la marca: un espacio pensado para que cada mujer encuentre prendas que resalten su fuerza, su elegancia y su feminidad, sin renunciar a la comodidad ni a su propia esencia.
    La idea central es posicionar a Aurora como un universo sofisticado, donde cada prenda —desde lo cotidiano hasta lo íntimo— transmite seguridad, estilo y presencia. `

  },
  {
    id: "efe",
    title: "EFE ELECTRONICA",
    img: "/proyects/efe/efe1.webp",
    orientation: "horizontal",
    description: `Efe electrónica se posiciona como un servicio técnico automotriz especializado, liderado por el Ing. Electrónico Federico Navarro, con un enfoque profesional, preciso y totalmente orientado a la confianza del cliente.
    La marca combina conocimiento técnico, experiencia real en diagnóstico y reparación electrónica automotriz, y una atención cercana que explica, asesora y acompaña en cada caso.`
  },
  {
    id: "esquinas",
    title: "4 ESQUINAS",
    img: "/proyects/esquinas/esquina1.webp",
    orientation: "horizontal",
    description: ` Nace del valor simbólico y estratégico de ubicarse en una de las intersecciones más importantes de Manantiales 2. Su nombre refleja directamente ese punto donde la vida del barrio sucede y se conecta.
    Es un complejo comercial compuesto por 8 locales y 2 oficinas.
    La marca se imagina colorida, llamativa y vibrante, un espacio que invita a pasar, quedarse y volver. Su esencia combina practicidad y disfrute`
  },
  {
    id: "sonora",
    title: "SONORA",
    img: "/proyects/sonora/sonora2.webp",
    orientation: "vertical",
    description: "Proyecto editorial y visual."
  },
  {
    id: "boris",
    title: "BORIS",
    img: "/proyects/boris/boris1.webp",
    orientation: "vertical",
    description: `Desarrollamos la identidad de BORIS, una marca de café inspirada en un conejo real y en todo lo que representa: lealtad, alegría y autenticidad.
    El proyecto integra dos mundos bajo una misma esencia: Boris Café de Especialidad, un espacio trendy, minimalista y chill; y Boris Estudio, un centro profesional dedicado a la formación, investigación y cultura del café.`
  },
  {
    id: "luz",
    title: "LUZ ALIGNERS",
    img: "/proyects/luz/luz1.webp",
    orientation: "vertical",
    description: `Desarrollamos la identidad visual del consultorio particular de Luz González, un espacio odontológico que busca transmitir calidez, humanidad y profesionalismo. La marca representa una atención cercana, empática y moderna, donde el paciente puede atenderse sin miedos y sentirse acompañado en cada paso. `
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

