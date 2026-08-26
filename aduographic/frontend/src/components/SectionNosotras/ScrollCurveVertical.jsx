import { useEffect, useRef } from "react";
import { useScroll, useSpring, useReducedMotion } from "framer-motion";
import "./ScrollCurveVerticalStyles.css";

const CONFIG = {
  color: "rgb(168, 140, 202)",
  strokeWidth: 6,
  opacity: 0.4,
  blobSize: 14,
  blobOpacity: 0.85,
  drawCompleteAt: 0.7,
  spring: { stiffness: 55, damping: 22, mass: 0.6 },
};

const PATH_START =
  "M 210 -100 C 90 150, 300 320, 170 560 C 40 800, 260 980, 130 1220 C 55 1360, 150 1450, 90 1550";
const PATH_END =
  "M 90 -100 C 260 150, 40 320, 230 560 C 210 800, 60 980, 240 1220 C 280 1360, 60 1450, 200 1550";
const PATH_MID =
  "M 150 -100 C 175 150, 170 320, 200 560 C 125 800, 160 980, 185 1220 C 167 1360, 105 1450, 145 1550";

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

function ScrollCurveVertical() {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const blobRef = useRef(null);
  const bodyRef = useRef(typeof document !== "undefined" ? document.body : null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    container: bodyRef,
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
    <div className="scroll-curve-vertical-wrap" ref={wrapRef} aria-hidden="true">
      <svg
        ref={svgRef}
        className="scroll-curve-vertical-svg"
        viewBox="0 0 300 1450"
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
          className="scroll-curve-vertical-blob"
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

export default ScrollCurveVertical;
