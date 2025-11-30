import "./LandingCreative.css";
import { useEffect } from "react";

export default function LandingCreative() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="creative-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <svg
          className="hero-svg"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>

            {/* === FILTRO PARA LÍNEA 1 === */}
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

              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="28"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  dur="9s"
                  values="18; 38; 26; 32; 18"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>

            {/* === FILTRO PARA LÍNEA 2 (delay) === */}
            <filter id="wave-2" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.005 0.004"
                numOctaves="3"
                seed="3"
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="9s"
                  begin="0.3s"
                  values="0.005 0.004; 0.007 0.006; 0.003 0.002; 0.005 0.004"
                  repeatCount="indefinite"
                />
              </feTurbulence>

              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="34"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  dur="9s"
                  begin="0.3s"
                  values="22; 44; 30; 38; 22"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>

            {/* === FILTRO PARA LÍNEA 3 (más delay) === */}
            <filter id="wave-3" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.006 0.005"
                numOctaves="3"
                seed="5"
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="9s"
                  begin="0.6s"
                  values="0.006 0.005; 0.008 0.007; 0.004 0.003; 0.006 0.005"
                  repeatCount="indefinite"
                />
              </feTurbulence>

              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="40"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  dur="9s"
                  begin="0.6s"
                  values="28; 55; 35; 45; 28"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>

          </defs>

          {/* === TRES LÍNEAS — CADA UNA CON SU PROPIA ONDA === */}
          <g>
            <text
              x="50%"
              y="110"
              textAnchor="middle"
              className="hero-text hero-text-top"
              filter="url(#wave-1)"
            >
              TU MITAD CREATIVA
            </text>

            <text
              x="50%"
              y="210"
              textAnchor="middle"
              className="hero-text hero-text-middle"
              filter="url(#wave-2)"
            >
              TU MITAD CREATIVA
            </text>

            <text
              x="50%"
              y="310"
              textAnchor="middle"
              className="hero-text hero-text-bottom"
              filter="url(#wave-3)"
            >
              TU MITAD CREATIVA
            </text>
          </g>

        </svg>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="gallery-grid">
          <div className="gallery-item">Proyecto 01</div>
          <div className="gallery-item">Proyecto 02</div>
          <div className="gallery-item">Proyecto 03</div>
          <div className="gallery-item">Proyecto 04</div>
          <div className="gallery-item">Proyecto 05</div>
          <div className="gallery-item">Proyecto 06</div>
        </div>
      </section>

    </div>
  );
}
