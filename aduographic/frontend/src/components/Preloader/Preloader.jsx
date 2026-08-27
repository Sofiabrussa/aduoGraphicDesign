import { useEffect, useMemo, useState } from "react";
import "./PreloaderStyles.css";

const MAX_WAIT_MS = 15000; // seguro: si algo falla/tarda, revelamos la página igual
const MIN_DISPLAY_MS = 2200; // aunque todo cargue al instante, mostrar el loader un rato igual
const RAY_COUNT = 20;
const RING_RADIUS = 86;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function Preloader() {
  const [percent, setPercent] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let done = false;
    const startTime = Date.now();
    document.body.style.overflow = "hidden";

    const finish = () => {
      if (done) return;
      done = true;
      setPercent(100);
      // esperamos el mínimo de exhibición (si ya se cumplió, sigue de largo)
      // más una pequeña pausa para que se alcance a ver el "// 100"
      const elapsed = Date.now() - startTime;
      const delay = Math.max(MIN_DISPLAY_MS - elapsed, 250);
      const t1 = setTimeout(() => {
        setExiting(true);
        const t2 = setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = "";
        }, 700); // debe coincidir con la duración de la transición de salida en CSS
        cleanupTimers.push(t2);
      }, delay);
      cleanupTimers.push(t1);
    };

    const cleanupTimers = [];

    // Trackeamos <img> y <video> ya presentes en el DOM (Cloudinary incluido:
    // el evento "load"/"loadeddata" nativo funciona igual para recursos externos).
    // Las <img loading="lazy"> quedan afuera a propósito: el navegador recién
    // las pide al acercarse al viewport, así que esperarlas forzaría el
    // timeout de seguridad en cada carga.
    const images = Array.from(document.querySelectorAll("img")).filter(
      (img) => img.loading !== "lazy"
    );
    const videos = Array.from(document.querySelectorAll("video"));
    const media = [...images, ...videos];

    if (media.length === 0) {
      finish();
      return () => {
        document.body.style.overflow = "";
      };
    }

    let loadedCount = 0;
    const updateProgress = () => {
      loadedCount += 1;
      if (loadedCount >= media.length) {
        finish();
      } else {
        setPercent(Math.min(99, Math.floor((loadedCount / media.length) * 100)));
      }
    };

    const cleanups = media.map((el) => {
      const isVideo = el.tagName === "VIDEO";
      const alreadyReady = isVideo
        ? el.readyState >= 3 // HAVE_FUTURE_DATA
        : el.complete && el.naturalWidth !== 0;

      if (alreadyReady) {
        updateProgress();
        return () => {};
      }

      const onDone = () => updateProgress();
      const loadEvent = isVideo ? "loadeddata" : "load";
      el.addEventListener(loadEvent, onDone, { once: true });
      el.addEventListener("error", onDone, { once: true }); // no bloquear por un asset roto

      return () => {
        el.removeEventListener(loadEvent, onDone);
        el.removeEventListener("error", onDone);
      };
    });

    const failSafe = setTimeout(finish, MAX_WAIT_MS);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      cleanupTimers.forEach(clearTimeout);
      clearTimeout(failSafe);
      document.body.style.overflow = "";
    };
  }, []);

  const rays = useMemo(() => Array.from({ length: RAY_COUNT }), []);
  const displayPercent = String(percent).padStart(2, "0");

  if (hidden) return null;

  return (
    <div
      className={`preloader ${exiting ? "preloader--exiting" : ""}`}
      aria-hidden={hidden}
      role="status"
      aria-live="polite"
    >
      <div className="preloader__rays" aria-hidden="true">
        {rays.map((_, i) => (
          <span
            key={i}
            className="preloader__ray"
            style={{
              "--r": `${(360 / RAY_COUNT) * i}deg`,
              animationDelay: `${(i % 5) * 0.3}s`,
            }}
          />
        ))}
      </div>

      <svg
        className="preloader__wave preloader__wave--left"
        viewBox="0 0 40 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M20 0 C 4 24, 36 48, 20 72 C 4 96, 36 120, 20 144 C 4 168, 36 192, 20 216 C 4 240, 36 264, 20 288 C 10 300, 30 310, 20 320" />
      </svg>
      <svg
        className="preloader__wave preloader__wave--right"
        viewBox="0 0 40 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M20 0 C 36 24, 4 48, 20 72 C 36 96, 4 120, 20 144 C 36 168, 4 192, 20 216 C 36 240, 4 264, 20 288 C 30 300, 10 310, 20 320" />
      </svg>

      <div className="preloader__center">
        <svg className="preloader__ring" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <pattern
              id="preloaderHatch"
              patternUnits="userSpaceOnUse"
              width="7"
              height="7"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="7" stroke="rgb(88, 58, 122)" strokeWidth="2.4" />
            </pattern>
          </defs>

          <circle className="preloader__ring-track" cx="100" cy="100" r={RING_RADIUS} />

          <g className="preloader__ring-fill-group" transform="rotate(-90 100 100)">
            <circle
              className="preloader__ring-fill"
              cx="100"
              cy="100"
              r={RING_RADIUS}
              style={{
                strokeDasharray: RING_CIRCUMFERENCE,
                strokeDashoffset: RING_CIRCUMFERENCE * (1 - percent / 100),
              }}
            />
          </g>
        </svg>

        <div className="preloader__count">
          <span className="preloader__count-slash">{"//"}</span> {displayPercent}
        </div>
      </div>
    </div>
  );
}

export default Preloader;
