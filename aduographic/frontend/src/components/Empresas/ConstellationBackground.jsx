import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const POINT_DENSITY = 9000; // menor = más puntos
const CONNECT_RADIUS = 130;
const MOUSE_RADIUS = 170;
const POINT_COLOR = "196, 181, 253"; // #C4B5FD
const LINE_COLOR_NEAR = "167, 139, 250"; // #A78BFA
const LINE_COLOR_FAR = "139, 92, 246";

function ConstellationBackground({ containerRef }) {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let points = [];
    let frameId = null;
    const mouse = { x: -9999, y: -9999, active: false };

    function initPoints() {
      const count = Math.floor((width * height) / POINT_DENSITY);
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.2 + 0.6,
      }));
    }

    function resize() {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      initPoints();
    }

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);

      // movimiento propio, sutil, de cada punto
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // puntos (más brillantes cerca del cursor)
      for (const p of points) {
        const d = mouse.active ? Math.hypot(p.x - mouse.x, p.y - mouse.y) : Infinity;
        const near = d < MOUSE_RADIUS;
        const intensity = near ? 1 - d / MOUSE_RADIUS : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + (near ? intensity * 1.5 : 0), 0, Math.PI * 2);
        ctx.fillStyle = near
          ? `rgba(${POINT_COLOR}, ${0.25 + intensity * 0.75})`
          : `rgba(${POINT_COLOR}, 0.18)`;
        ctx.fill();
      }

      // conexiones entre puntos cercanos, resaltadas cerca del cursor
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist >= CONNECT_RADIUS) continue;

          const midDist = mouse.active
            ? Math.min(
                Math.hypot(a.x - mouse.x, a.y - mouse.y),
                Math.hypot(b.x - mouse.x, b.y - mouse.y)
              )
            : Infinity;
          const nearMouse = midDist < MOUSE_RADIUS;
          const baseOpacity = (1 - dist / CONNECT_RADIUS) * 0.06;
          const opacity = nearMouse
            ? baseOpacity + (1 - midDist / MOUSE_RADIUS) * 0.5
            : baseOpacity;

          if (opacity <= 0.01) continue;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = nearMouse
            ? `rgba(${LINE_COLOR_NEAR}, ${opacity})`
            : `rgba(${LINE_COLOR_FAR}, ${opacity})`;
          ctx.lineWidth = nearMouse ? 1.1 : 0.6;
          ctx.stroke();
        }
      }
    }

    function loop() {
      drawFrame();
      frameId = requestAnimationFrame(loop);
    }

    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    resize();
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      drawFrame();
    } else {
      loop();
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, [containerRef, prefersReducedMotion]);

  return <canvas ref={canvasRef} className="constellation-canvas" aria-hidden="true" />;
}

export default ConstellationBackground;
