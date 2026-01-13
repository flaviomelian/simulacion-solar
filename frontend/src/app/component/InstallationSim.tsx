"use client";

import React, { useState, useEffect } from "react";
import Inverter from "./Inverter";
import Batteries from "./Batteries";

interface InstallationSimProps {
  setActivePanels: React.Dispatch<React.SetStateAction<number>>;
}

const InstallationSim: React.FC<InstallationSimProps> = ({
  setActivePanels,
}: InstallationSimProps) => {
  // Dimensiones de la matriz
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(14);

  const [matrix, setMatrix] = useState<boolean[][]>(() =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => false)
    )
  );

  // Selección rectangular: de [0,0] hasta la celda clicada
  const toggleCell = (r: number, c: number) => {
    const newMatrix = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i <= r && j <= c)
    );
    setMatrix(newMatrix);
  };

  // Reset matrix when dimensions change
  useEffect(() => {
    setMatrix(
      Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => false)
      )
    );
  }, [rows, cols]);

  // Dimensiones de cada panel (px)
  const PANEL_WIDTH = 40;
  const PANEL_HEIGHT = 25;

  // Dimensiones totales de la cuadrícula
  const gridWidth = cols * PANEL_WIDTH;
  const gridHeight = rows * PANEL_HEIGHT;

  // Número de paneles activos
  const activePanels = matrix.flat().filter(Boolean).length;

  // Notificar al padre (SolarSim) si se pasa setActivePanels
  useEffect(() => {
    if (setActivePanels) setActivePanels(activePanels);
  }, [activePanels, setActivePanels]);

  return (
    <div className="flex flex-col gap-8 justify-between">
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        Simulación de instalación fotovoltaica
      </h2>

      <div className="flex gap-8 items-start justify-between">
        {/* MATRIZ SOLAR */}
        <div
          className="grid gap-1 p-3 rounded-2xl bg-sky-200 dark:bg-sky-800"
          style={{
            gridTemplateColumns: `repeat(${cols}, ${PANEL_WIDTH}px)`,
            gridTemplateRows: `repeat(${rows}, ${PANEL_HEIGHT}px)`,
            width: `${gridWidth + 80}px`, // + padding
            height: `${gridHeight + 70}px`,
          }}
        >
          {matrix.map((row, r) =>
            row.map((cell, c) => (
              <div
                key={`${r}-${c}`}
                onClick={() => toggleCell(r, c)}
                className={`
                  cursor-pointer rounded-sm transition
                  ${
                    cell
                      ? "bg-blue-700 hover:bg-blue-600"
                      : "bg-sky-100 dark:bg-sky-700 hover:bg-sky-300"
                  }
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
      <div className="flex flex-row flex-start gap-8">
        <div className="flex flex-col gap-4 p-4 rounded-2xl bg-blue-900 border border-zinc-700 w-72">
          <h3 className="text-sm font-semibold text-zinc-100">
            Panel de control eléctrico
          </h3>

          {/* Dimensión base */}
          <div className="flex flex-col gap-1 bg-blue-700">
            <label className="text-3xs text-zinc-400 p-1">
              Dimensión base del panel (m²)
            </label>
            <input
              type="number"
              min={0.5}
              step={0.1}
              value={10}
              className="px-2 py-1 rounded bg-blue-800 border border-blue-600 text-zinc-100 text-sm"
            />
          </div>

          {/* Resultados */}
          <div className="flex flex-col gap-1 text-sm text-zinc-200 mt-2">
            <div>
              <span className="text-zinc-400">Potencia:</span>{" "}
              <span className="font-semibold">
                {/*potencia.toFixed(1)*/}9000 W
              </span>
            </div>
            <div>
              <span className="text-zinc-400">Voltaje:</span>{" "}
              <span className="font-semibold">{/*voltaje*/}240 V</span>
            </div>
            <div>
              <span className="text-zinc-400">Intensidad:</span>{" "}
              <span className="font-semibold">
                {/*intensidad.toFixed(2)*/}37.5 A
              </span>
            </div>
          </div>
        </div>
        {/* CONTROL DE DIMENSIONES DE MATRIZ */}
        <div className="ml-30 mt-6 p-4 rounded-2xl bg-blue-800 border border-blue-600 w-90">
          <h2 className="text-m font-semibold text-blue-100 mb-3">
            Dimensiones máximas de la instalación
          </h2>

          <div className="flex flex-col gap-3">
            {/* Filas */}
            <div className="flex items-center justify-between">
              <label className="text-3xs text-blue-200">Filas (Norte–Sur)</label>
              <input
                type="number"
                min={1}
                max={14}
                value={rows}
                onChange={(e) => setRows(Number(e.target.value))}
                className="
          w-20 px-2 py-1 text-sm rounded
          bg-blue-800 border border-blue-600
          text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500
        "
              />
            </div>

            {/* Columnas */}
            <div className="flex items-center justify-between">
              <label className="text-3xs text-blue-200">
                Columnas (Este–Oeste)
              </label>
              <input
                type="number"
                min={1}
                max={14}
                value={cols}
                onChange={(e) => setCols(Number(e.target.value))}
                className="
          w-20 px-2 py-1 text-sm rounded
          bg-blue-800 border border-blue-600
          text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500
        "
              />
            </div>
          </div>

          {/* Info */}
          <div className="mt-3 text-3xs text-white">
            Tamaño máximo: {rows} × {cols} ({rows * cols} paneles)
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationSim;
