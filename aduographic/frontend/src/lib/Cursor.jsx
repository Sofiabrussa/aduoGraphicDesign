import React, { useEffect, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastMoveTime = 0;

    const move = (e) => {
      const now = Date.now();
      const speed = now - lastMoveTime;
      lastMoveTime = now;

      setPosition({ x: e.clientX, y: e.clientY });

      // cambio de tamaño según velocidad
      const cursor = document.querySelector(".cursor-dot");
      if (cursor) {
        const scale = Math.min(1.8, Math.max(1, 60 / speed));
        cursor.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      // ocultar sobre elementos interactivos
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el?.closest("a, button, input, textarea, select, svg, i")) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", move);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", move);
    };
  }, []);

  return (
    <div
      className={`cursor-dot ${hidden ? "cursor-hidden" : ""}`}
      style={{ left: position.x, top: position.y }}
    ></div>
  );
}
