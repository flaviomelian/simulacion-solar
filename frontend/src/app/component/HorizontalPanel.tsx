// HorizontalPanel.tsx
"use client";

import { useState } from "react";
import { Sun } from "lucide-react";

interface Props {
  peakHeight: number;
  setPeakHeight: (h: number) => void;
  sunPos: number;
  setSunPos: (p: number) => void;
}

export default function HorizontalPanel({ peakHeight, setPeakHeight, sunPos, setSunPos }: Props) {
  const [rotation, setRotation] = useState(90);

  const size = 300;
  const panelSize = 100;
  const padding = 40;

  const t = sunPos / 100;
  const sunX = padding + t * (size - 2 * padding);
  const sunY = padding + 4 * peakHeight * t * (1 - t);

  const sunPath = Array.from({ length: 100 }, (_, i) => {
    const t = i / 99;
    return {
      x: padding + t * (size - 2 * padding),
      y: padding + 4 * peakHeight * t * (1 - t),
    };
  });

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Fondo */}
      <div
        className="relative bg-sky-100 dark:bg-sky-700 border border-sky-200 dark:border-sky-800 rounded-2xl"
        style={{ width: size, height: size }}
      >
        {/* Trayectoria */}
        <svg width={size} height={size} className="absolute bottom-20 left-0 pointer-events-none">
          <path
            d={`M ${sunPath.map((p) => `${p.x},${size - p.y}`).join(" ")}`}
            fill="none"
            stroke="yellow"
            strokeWidth={2}
          />
          <Sun
            size={24}
            className="text-yellow-400"
            style={{ position: "absolute", transform: `translate(${sunX - 12}px, ${size - sunY - 12}px)` }}
          />
        </svg>

        {/* Panel */}
        <div
          className="absolute border border-zinc-700 flex flex-col items-center"
          style={{
            width: panelSize,
            height: panelSize,
            top: size - panelSize - (size - panelSize) / 10,
            left: (size - panelSize) / 2,
            backgroundColor: "#1E3A8A",
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center",
            borderRadius: "8px",
            transition: "transform 0.5s",
          }}
        >
          {/* Flecha */}
          <div
            className="mt-2"
            style={{
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "16px solid #FACC15",
              transform: "rotate(-90deg) translate(-35px, -70px)",
            }}
          />

          {/* Grid */}
          <div
            className="grid flex-1 w-full"
            style={{ gridTemplateRows: "repeat(5, 1fr)", gridTemplateColumns: "repeat(5, 1fr)" }}
          >
            {Array.from({ length: 25 }).map((_, idx) => (
              <div key={idx} className="border border-zinc-600/40" style={{ boxSizing: "border-box" }} />
            ))}
          </div>
        </div>
      </div>

      {/* Sliders */}
      <div className="flex flex-col items-center gap-2 w-72">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">Azimut: {rotation - 90}°</label>
        <input
          type="range"
          min={0}
          max={180}
          value={rotation}
          onChange={(e) => setRotation(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-72">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">Altura máxima del sol: {peakHeight}px</label>
        <input type="range" min={20} max={150} value={peakHeight} onChange={(e) => setPeakHeight(Number(e.target.value))} className="w-full" />
      </div>

      <div className="flex flex-col items-center gap-2 w-72">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">Posición del sol: {sunPos}%</label>
        <input type="range" min={0} max={100} value={sunPos} onChange={(e) => setSunPos(Number(e.target.value))} className="w-full" />
      </div>
    </div>
  );
}
