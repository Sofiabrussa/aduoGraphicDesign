import React, { useEffect, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      setEnabled(false);
      return;
    }

    let lastMoveTime = 0;

    const move = (e) => {
      if (!Number.isFinite(e.clientX) || !Number.isFinite(e.clientY)) return;

      const now = Date.now();
      const speed = now - lastMoveTime || 1;
      lastMoveTime = now;

      setPosition({ x: e.clientX, y: e.clientY });

      const cursor = document.querySelector(".cursor-dot");
      if (cursor) {
        const scale = Math.min(1.8, Math.max(1, 60 / speed));
        cursor.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHidden(!!el?.closest("a, button, input, textarea, select, svg, i"));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`cursor-dot ${hidden ? "cursor-hidden" : ""}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}
