import "./LandingCreative.css";
import PortfolioCard from "./PortfolioCard";
import ProjectDialog from "./ProjectDialog";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "aurora",
    title: "AURORA",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069738/3fdc6964-fded-4b4a-ac44-aa2766ad3a94_gi7drd.png",
    orientation: "horizontal",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069739/bolsa_nkhq46.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780070197/flyer_1_1_2_2_rt1il6.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069739/plain-clothing-price-tag-close-up_hkkdhq.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069740/stickers_2_ztasie.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069739/PAPEL_jqslvn.png"],
  
    description: `Nace desde un lugar profundamente personal y familiar: un nombre heredado, amado y elegido con convicción. Esa misma conexión emocional se convierte en el corazón de la marca: un espacio pensado para que cada mujer encuentre prendas que resalten su fuerza, su elegancia y su feminidad, sin renunciar a la comodidad ni a su propia esencia.
    \n La idea central es posicionar a Aurora como un universo sofisticado, donde cada prenda —desde lo cotidiano hasta lo íntimo— transmite seguridad, estilo y presencia. `

  },
  {
    id: "efe",
    title: "EFE ELECTRONICA",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1782743244/21st254_zb2hit.png",
    orientation: "horizontal",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782747968/9441070_wlm4ep.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787795959/efe5_eay4vw.webp",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787795968/efe2_jcmzzv.webp"],
    description: `Efe electrónica se posiciona como un servicio técnico automotriz especializado, liderado por el Ing. Electrónico Federico Navarro, con un enfoque profesional, preciso y totalmente orientado a la confianza del cliente.
    \n La marca combina conocimiento técnico, experiencia real en diagnóstico y reparación electrónica automotriz, y una atención cercana que explica, asesora y acompaña en cada caso.`
  },
  {
    id: "esquinas",
    title: "4 ESQUINAS",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1780070554/Banner_kdf8th.png",
    orientation: "horizontal",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780070558/Botella_1_oql4u0.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780070556/cartel_1_tdliy9.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780070555/Cat%C3%A1logo_ezlzuk.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780070557/Tarjetas_personales_gcxx72.png"],
    description: ` Nace del valor simbólico y estratégico de ubicarse en una de las intersecciones más importantes de Manantiales 2. Su nombre refleja directamente ese punto donde la vida del barrio sucede y se conecta.
    Es un complejo comercial compuesto por 8 locales y 2 oficinas.
    \n La marca se imagina colorida, llamativa y vibrante, un espacio que invita a pasar, quedarse y volver. Su esencia combina practicidad y disfrute`
  },
  {
    id: "LIHUE",
    title: "LIHUE",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746278/9_pzkqqv.jpg",
    orientation: "horizontal",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746626/6_tnugf0.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746241/12_avlhbv.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746623/1_i50wbm.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746441/15_utl5xz.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746624/4_rthx6m.png"],
    description:  ` Partimos del significado profundo de La Lihue —tierra fértil— para construir una identidad que combina origen, tradición y una nueva mirada contemporánea.
    \n La idea se centra en transformar a La Lihue en un refugio urbano: un espacio tranquilo en medio del movimiento de la ciudad, donde comer algo rico se vuelve una pausa consciente. Un lugar con estética armoniosa, productos diseñados con sensibilidad y un clima que invita a quedarse: trabajar, descansar, compartir, crear.`  
  },
  {
    id: "sonora",
    title: "SONORA",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796481/sonora4_vos52q.webp",
    orientation: "vertical",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796480/sonora1_yq7lxk.webp",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796481/sonora5_atubek.jpg",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796480/sonora3_qolmff.webp"],
    description: ` Es una marca de contenido y comunidad que combina finanzas, tecnología y sonido para explicar el mundo de las inversiones de forma clara, cercana y actual. A través de un podcast y plataformas digitales, transforma temas como bitcoin, cripto, mercados y crecimiento financiero en conversaciones accesibles, humanas y fáciles de entender.
    \n La esencia de Inversión Sonora está en hacer que el conocimiento suene: bajar lo complejo a un lenguaje simple, conectar ideas con experiencias reales y motivar a tomar acción en el presente. No habla solo de dinero, sino de mentalidad, aprendizaje y nuevas formas de invertir.
    `
  },
  {
    id: "boris",
    title: "BORIS",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069008/Copia_de_fachada_xf7vnk.png",
    orientation: "vertical",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068433/Copia_de_Cartel_Calle_g5knxq.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068447/Copia_de_Redes_bhwvy4.jpg",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068447/Copia_de_Men%C3%BA_hz5ak3.jpg",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068432/Copia_de_Celular_qlc9od.png",],
    description: `Desarrollamos la identidad de BORIS, una marca de café inspirada en un conejo real y en todo lo que representa: lealtad, alegría y autenticidad.
    \n El proyecto integra dos mundos bajo una misma esencia: Boris Café de Especialidad, un espacio trendy, minimalista y chill; y Boris Estudio, un centro profesional dedicado a la formación, investigación y cultura del café.`
  },
  {
    id: "luz",
    title: "LUZ ALIGNERS",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1782743466/web_c1gzbn.png",
    orientation: "vertical",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782743914/carteleria_1_eyec8u.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782743914/flyer_nrr9bq.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782743466/uniforme_ppb2pj.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1782742370/story_realistic_mockup_ttt5yu.png",],
    description: `Desarrollamos la identidad visual del consultorio particular de Luz González, un espacio odontológico que busca transmitir calidez, humanidad y profesionalismo. La marca representa una atención cercana, empática y moderna, donde el paciente puede atenderse sin miedos y sentirse acompañado en cada paso. `
  },
  {
    id: "ABC",
    title: "ABC",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068299/Copia_de_5c004a68-8460-4cea-a0a0-4f6709691cc9_l7tien.png",
    orientation: "horizontal",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068300/Copia_de_web_vnisj2.jpg",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068295/Copia_de_papeleria_ql6kqc.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068295/Copia_de_botella_zj5h88.png",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068300/Copia_de_cartel_m5bcyb.png",],
    description: `ABC Cripto se construye desde un propósito simple pero poderoso: hacer que el mundo cripto sea comprensible para todos, sin tecnicismos, sin miedos y sin barreras. La marca se posiciona como ese “primer paso” que todos necesitan para entrar a un universo que parece complejo, pero que, explicado con claridad, puede transformar realidades económicas.
 \n La idea central es convertir a ABC Cripto en el profesor confiable y cercano del mundo cripto, alguien que enseña desde cero, acompaña, traduce lo difícil en simple y crea comunidad. Un espacio donde aprender es fácil, accesible y seguro, y donde cualquier persona —sin importar su nivel— puede sentirse parte.`
  },
  {
    id: "lutz",
    title: "LUTZ",
    img: "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796372/lutz1_mhelct.webp",
    orientation: "horizontal",
    gallery: [
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796372/lutz8_tctqyw.webp",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796371/lutz7_fberk1.webp",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796370/lutz5_lh2otx.webp",
    "https://res.cloudinary.com/dbbyng05e/image/upload/v1787796370/lutz2_m7gcq2.webp"],
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

