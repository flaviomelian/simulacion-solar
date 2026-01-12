"use client";

import React, { useState, useEffect } from "react";
import Inverter from "./Inverter";
import Batteries from "./Batteries";

interface InstallationSimProps {
  setActivePanels: React.Dispatch<React.SetStateAction<number>>
}

const ROWS = 10;
const COLS = 14;

const InstallationSim: React.FC<InstallationSimProps> = ({ setActivePanels }: InstallationSimProps) => {
  const [matrix, setMatrix] = useState<boolean[][]>(
    Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, () => false)
    )
  );

  // Selección rectangular: de [0,0] hasta la celda clicada
  const toggleCell = (r: number, c: number) => {
    const newMatrix = Array.from({ length: ROWS }, (_, i) =>
      Array.from({ length: COLS }, (_, j) => i <= r && j <= c)
    );
    setMatrix(newMatrix);
  };

  // Número de paneles activos
  const activePanels = matrix.flat().filter(Boolean).length;

  // Notificar al padre (SolarSim) si se pasa setActivePanels
  useEffect(() => {
    if (setActivePanels) setActivePanels(activePanels);
  }, [activePanels, setActivePanels]);

  return (
    <div className="flex flex-col gap-8 ml-5">
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        Simulación de instalación fotovoltaica
      </h2>

      <div className="flex gap-8 items-start">
        {/* MATRIZ SOLAR */}
        <div
          className="grid gap-1 p-3 rounded-2xl bg-sky-200 dark:bg-sky-800"
          style={{
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            width: "560px",
            height: "400px",
          }}
        >
          {matrix.map((row, r) =>
            row.map((cell, c) => (
              <div
                key={`${r}-${c}`}
                onClick={() => toggleCell(r, c)}
                className={`
                  cursor-pointer rounded-sm transition
                  ${cell
                    ? "bg-blue-700 hover:bg-blue-600"
                    : "bg-sky-100 dark:bg-sky-700 hover:bg-sky-300"}
                `}
              />
            ))
          )}
        </div>

        {/* SISTEMA ELÉCTRICO */}
        <div className="flex flex-col gap-4 min-w-[220px]">
          <Inverter />
          <Batteries />

          <div className="mt-2 p-3 rounded-xl bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700">
            <p className="text-sm text-green-700 dark:text-green-300">
              Paneles instalados:
              <span className="font-semibold ml-1">{activePanels}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationSim;
