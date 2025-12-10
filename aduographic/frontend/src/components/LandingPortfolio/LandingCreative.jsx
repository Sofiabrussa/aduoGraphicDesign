import "./LandingCreative.css";
import Navbar from "../NavBar/NavBar";
import PortfolioCard from "./PortfolioCard"
import { useEffect } from "react";

export default function LandingCreative() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const words = document.querySelectorAll(".glitch-word");
    let glitching = false;

    function startGlitchCycle() {
      if (glitching) return;
      glitching = true;

      const randomWord = words[Math.floor(Math.random() * words.length)];
      randomWord.classList.add("glitch-active");

      const glitchDuration = 800;

      setTimeout(() => {
        randomWord.classList.remove("glitch-active");
        glitching = false;

        const wait = 1500 + Math.random() * 2000;
        setTimeout(startGlitchCycle, wait);
      }, glitchDuration);
    }

    startGlitchCycle();
  }, []);

  return (
    <>
      <Navbar />
      <div className="creative-page">

        {/* HERO SECTION */}
        <section className="hero-section">
          <svg
            className="hero-svg"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* === FILTROS SVG (tus originales) === */}
              <filter id="wave-1" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence type="fractalNoise" baseFrequency="0.004 0.003" numOctaves="3" seed="2" result="noise">
                  <animate attributeName="baseFrequency" dur="9s"
                    values="0.004 0.003; 0.006 0.005; 0.003 0.002; 0.004 0.003"
                    repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G">
                  <animate attributeName="scale" dur="9s"
                    values="18; 38; 26; 32; 18"
                    repeatCount="indefinite" />
                </feDisplacementMap>
              </filter>

              <filter id="wave-2" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence type="fractalNoise" baseFrequency="0.005 0.004" numOctaves="3" seed="3" result="noise">
                  <animate attributeName="baseFrequency" dur="9s" begin="0.3s"
                    values="0.005 0.004; 0.007 0.006; 0.003 0.002; 0.005 0.004"
                    repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="34" xChannelSelector="R" yChannelSelector="G">
                  <animate attributeName="scale" dur="9s" begin="0.3s"
                    values="22; 44; 30; 38; 22"
                    repeatCount="indefinite" />
                </feDisplacementMap>
              </filter>

              <filter id="wave-3" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence type="fractalNoise" baseFrequency="0.006 0.005" numOctaves="3" seed="5" result="noise">
                  <animate attributeName="baseFrequency" dur="9s" begin="0.6s"
                    values="0.006 0.005; 0.008 0.007; 0.004 0.003; 0.006 0.005"
                    repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G">
                  <animate attributeName="scale" dur="9s" begin="0.6s"
                    values="28; 55; 35; 45; 28"
                    repeatCount="indefinite" />
                </feDisplacementMap>
              </filter>
            </defs>

            {/* === DIVISIÓN EN DOS COLUMNAS (IZQ / DER) === */}
            <g>

              {/* IZQUIERDA — SUBE */}
              <g className="wave-up">
                <text x="30%" y="110" textAnchor="middle" className="hero-text hero-text-top">
                  <tspan className="glitch-word">TU MITAD</tspan>
                </text>

                <text x="23%" y="210" textAnchor="middle" className="hero-text hero-text-middle">
                  <tspan className="glitch-word">TU MITAD</tspan>
                </text>

                <text x="30%" y="310" textAnchor="middle" className="hero-text hero-text-bottom">
                  <tspan className="glitch-word">TU MITAD</tspan>
                </text>
              </g>

              {/* DERECHA — BAJA */}
              <g className="wave-down">
                <text x="75%" y="110" textAnchor="middle" className="hero-text hero-text-top">
                  <tspan className="glitch-word">CREATIVA</tspan>
                </text>

                <text x="75%" y="210" textAnchor="middle" className="hero-text hero-text-middle">
                  <tspan className="glitch-word">CREATIVA</tspan>
                </text>

                <text x="75%" y="310" textAnchor="middle" className="hero-text hero-text-bottom">
                  <tspan className="glitch-word">CREATIVA</tspan>
                </text>
              </g>

            </g>
          </svg>
        </section>

        <section className="portfolio-section">

          {/* FILA 1 — HORIZONTALES */}
          <div className="grid-row grid-horizontal">
            <PortfolioCard img="/proyects/aurora/uno.webp" title="Proyecto 01" />
            <PortfolioCard img="/proyects/efe/efe1.webp" title="Proyecto 02" />
            <PortfolioCard img="/proyects/esquinas/esquina1.webp" title="Proyecto 03" />
          </div>

          {/* FILA 2 — VERTICALES */}
          <div className="grid-row grid-vertical">
            <PortfolioCard img="/proyects/sonora/sonora2.webp" title="Proyecto 04" orientation="vertical" />
            <PortfolioCard img="/proyects/boris/boris1.webp" title="Proyecto 05" orientation="vertical" />
            <PortfolioCard img="/proyects/luz/luz1.webp" title="Proyecto 06" orientation="vertical" />
          </div>

        </section>
      </div>
    </>
  );
}
