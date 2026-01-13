"use client";

import React, { useState, useEffect, act } from "react";
import HorizontalPanel from "./HorizontalPanel";
import VerticalPanel from "./VerticalPanel";
import ModelPanel from "./ModelPanel";
import { getSolarEstimate } from "../service/SolarEstimateParams";
import InstallationSim from "./InstallationSim";
import { PanelModel } from "./ModelPanel";
interface SolarSimProps {
  panels: number;
}

const SolarSim = ({ panels }: SolarSimProps) => {
  const [peakHeight, setPeakHeight] = useState(80); // altura máxima de la parábola
  const [sunPos, setSunPos] = useState(50); // posición del sol 0-100
  const [tilt, setTilt] = useState(45); // inclinación del panel
  const [installationMode, setInstallationMode] = useState(false);
  const [panelsCount, setPanelsCount] = useState(panels);
  const [estimate, setEstimate] = useState<{ energiaDiaria?: number }>({});
  const [selectedPanel, setSelectedPanel] = useState<PanelModel | null>(null);
  const areaPerPanel = 1.6; // m² por panel

  // Recalcular energía cuando cambian parámetros o número de paneles

  useEffect(() => {
    const fetchEstimate = async () => {
      if (!selectedPanel) return;
      setPanelsCount(panels);
      try {
        const totalArea = areaPerPanel * (installationMode ? panelsCount : 1);
        const data = await getSolarEstimate({
          latitud: 40.4168,
          diaDelAno: 15,
          orientacion: 180,
          inclinacion: selectedPanel.inclinacion, // usar inclinación del panel
          area: totalArea,
          eficiencia: selectedPanel.eficiencia, // usar eficiencia del panel
        });
        setEstimate(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEstimate();
  }, [tilt, selectedPanel, peakHeight, sunPos, installationMode, panels]);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        Simulación Solar
      </h2>

      <div className="flex flex-row items-start justify-center gap-12 max-w-4xl">
        <HorizontalPanel
          peakHeight={peakHeight}
          setPeakHeight={setPeakHeight}
          sunPos={sunPos}
          setSunPos={setSunPos}
        />
        <VerticalPanel peakHeight={peakHeight} sunPos={sunPos} />
        <ModelPanel
          selectedPanel={selectedPanel}
          setSelectedPanel={setSelectedPanel}
        />
      </div>

      {/* Toggle entre placa individual e instalación completa */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <span
          className={`text-sm transition ${
            !installationMode
              ? "text-zinc-900 dark:text-zinc-100 font-semibold"
              : "text-zinc-500"
          }`}
        >
          Placa individual
        </span>

        <button
          onClick={() => setInstallationMode((v) => !v)}
          className={`
            relative w-14 h-8 rounded-full transition-colors
            ${installationMode ? "bg-green-500" : "bg-zinc-400"}
          `}
        >
          <span
            className={`
              absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md
              transition-transform
              ${installationMode ? "translate-x-6" : "translate-x-0"}
            `}
          />
        </button>

        <span
          className={`text-sm transition ${
            installationMode
              ? "text-zinc-900 dark:text-zinc-100 font-semibold"
              : "text-zinc-500"
          }`}
        >
          Instalación completa
        </span>
      </div>

      {/* Estimación de energía */}
      <div className="flex flex-row justify-evenly mt-4 p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700">
        <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Energía estimada
        </h3>
        <p
          className="
    relative text-sm mt-1
    text-yellow-700 dark:text-yellow-200
    transition-all duration-300
    hover:text-yellow-600 dark:hover:text-yellow-100
  "
        >
          <span
            className="
      absolute inset-0 rounded-md
      bg-yellow-300 dark:bg-yellow-400
      blur-md opacity-40
      transition-all duration-300
      hover:opacity-100 hover:blur-lg
      pointer-events-none
    "
          />
          <span className="relative z-10">
            {estimate.energiaDiaria
              ? `${Number(estimate.energiaDiaria.toFixed(2)) * panelsCount} kWh`
              : "Calculando..."}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SolarSim;
