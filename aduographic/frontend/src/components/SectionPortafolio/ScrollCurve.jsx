import { useEffect, useRef } from "react";
import { useScroll, useSpring, useReducedMotion } from "framer-motion";
import "./ScrollCurveStyles.css";

const CONFIG = {
  color: "var(--primary-violet)",
  strokeWidth: 10,
  opacity: 0.4,
  blobSize: 18,
  blobOpacity: 0.85,
  drawCompleteAt: 0.7,
  spring: { stiffness: 55, damping: 22, mass: 0.6 },
};

const PATH_START =
  "M -100 210 C 150 90, 320 300, 560 170 C 800 40, 980 260, 1220 130 C 1360 55, 1450 150, 1550 90";
const PATH_END =
  "M -100 90 C 150 260, 320 40, 560 230 C 800 210, 980 60, 1220 240 C 1360 280, 1450 60, 1550 200";
const PATH_MID =
  "M -100 150 C 150 175, 320 170, 560 200 C 800 125, 980 160, 1220 185 C 1360 167, 1450 105, 1550 145";

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function interpolatePath(pathA, pathB, t) {
  const numsA = pathA.match(/-?[\d.]+/g).map(Number);
  const numsB = pathB.match(/-?[\d.]+/g).map(Number);
  let i = 0;
  return pathA.replace(/-?[\d.]+/g, () => {
    const value = lerp(numsA[i], numsB[i], t);
    i += 1;
    return value.toFixed(1);
  });
}

function ScrollCurve() {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const blobRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, CONFIG.spring);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    const blob = blobRef.current;
    if (!path || !svg) return;

    const render = (progress) => {
      const d = interpolatePath(PATH_START, PATH_END, progress);
      path.setAttribute("d", d);

      const drawProgress = clamp(progress / CONFIG.drawCompleteAt, 0, 1);
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length * (1 - drawProgress)}`;

      if (blob) {
        const point = path.getPointAtLength(length * drawProgress);
        const svgPoint = svg.createSVGPoint();
        svgPoint.x = point.x;
        svgPoint.y = point.y;
        const screenPoint = svgPoint.matrixTransform(path.getScreenCTM());
        const wrapRect = svg.getBoundingClientRect();
        blob.style.transform = `translate3d(${screenPoint.x - wrapRect.left}px, ${
          screenPoint.y - wrapRect.top
        }px, 0)`;
      }
    };

    if (prefersReducedMotion) {
      render(0.5);
      return;
    }

    render(smoothProgress.get());
    return smoothProgress.on("change", render);
  }, [prefersReducedMotion, smoothProgress]);

  return (
    <div className="scroll-curve-wrap" ref={wrapRef} aria-hidden="true">
      <svg
        ref={svgRef}
        className="scroll-curve-svg"
        viewBox="0 0 1450 300"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d={PATH_MID}
          style={{
            fill: "none",
            stroke: CONFIG.color,
            strokeWidth: CONFIG.strokeWidth,
            strokeLinecap: "round",
            opacity: CONFIG.opacity,
          }}
        />
      </svg>
      {!prefersReducedMotion && (
        <div
          ref={blobRef}
          className="scroll-curve-blob"
          style={{
            width: CONFIG.blobSize,
            height: CONFIG.blobSize,
            marginLeft: -CONFIG.blobSize / 2,
            marginTop: -CONFIG.blobSize / 2,
            background: CONFIG.color,
            opacity: CONFIG.blobOpacity,
          }}
        />
      )}
    </div>
  );
}

export default ScrollCurve;
