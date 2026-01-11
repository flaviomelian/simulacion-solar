// VerticalPanel.tsx
"use client";
import { useState, useEffect } from "react";

interface Props {
  peakHeight: number; // altura máxima de la parábola
  sunPos: number; // posición del sol (0-100)
}

const VerticalPanel = ({ peakHeight, sunPos }: Props) => {
  const [tilt, setTilt] = useState(45);
  const size = 300;
  const panelHeight = 260;
  const numRays = 15;

  // Calculamos el ángulo y longitud de los rayos según sunPos y peakHeight
  const t = sunPos / 100;
  const maxPeak = 150;
  const verticalFactor = peakHeight / maxPeak;
  const horizontalFactor = Math.abs(t - 0.5) * 2; // extremos → horizontal, centro → vertical

  const rayAngle = 90 + 90 * horizontalFactor * (1 - verticalFactor); // 90°-180°
  const rayLength = 150 + 50 * verticalFactor; // más altura → rayos más largos
  const rayAngleRad = (rayAngle * Math.PI) / 180;

  const rays = Array.from({ length: numRays }, (_, i) => {
    const offset = (i - (numRays - 1) / 2) * 10;
    const sunX = 40 + t * (size - 80);
    const sunY = 100 + 4 * peakHeight * t * (1 - t);

    return {
      x1: sunX + offset - rayLength * Math.sin(rayAngleRad),
      y1: sunY + offset,
      x2: sunX + offset + rayLength * Math.cos(rayAngleRad),
      y2: sunY - rayLength * Math.sin(rayAngleRad), // invertir Y para SVG
    };
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative bg-sky-100 dark:bg-sky-700 border border-sky-200 dark:border-sky-800 rounded-2xl"
        style={{ width: size, height: size }}
      >
        <div className="absolute bottom-6 ml-5 w-40 h-0.5 bg-zinc-400 dark:bg-zinc-600" />

        {/* Rayos dinámicos */}
        <svg
          width={size}
          height={size - 100}
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            transform: `rotate(${180 * (t < 0.5 ? t : (1 - t)) - 90}deg)`, // t = posición del sol 0-1
            transformOrigin: `${size / 2}px ${size / 2 + 10}px`, // eje de rotación
          }}
        >
          {rays.map((ray, i) => {
            const rayOffset = (i - (numRays - 1) / 2) * 15; // separación constante entre rayos
            const x1 = size / 2 + rayOffset; // posición inicial relativa al centro
            const y1 = size / 2; // eje horizontal del centro
            const length = 130 * (peakHeight / 150); // longitud según altura máxima
            const x2 = x1;
            const y2 = y1 - length; // todos apuntando hacia arriba antes de rotar

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="yellow"
                strokeWidth={2}
              />
            );
          })}
        </svg>

        {/* Panel */}
        <div
          className="absolute bottom-6 ml-5 origin-bottom"
          style={{
            width: "4px",
            height: panelHeight,
            backgroundColor: "#1E3A8A",
            transform: `rotate(${tilt}deg)`,
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Slider de inclinación */}
      <div className="flex flex-col items-center gap-2 w-64">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          Inclinación del panel: {tilt}°
        </label>
        <input
          type="range"
          min={0}
          max={90}
          value={90 - tilt}
          onChange={(e) => setTilt(90 - Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default VerticalPanel;
