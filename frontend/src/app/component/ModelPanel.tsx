"use client";

import React, { useEffect, useState } from "react";

export interface PanelModel {
  id: number;
  modelo: string;
  potenciaWp: number;
  eficiencia: number;
  area: number;
  inclinacion: number;
}

interface ModelPanelProps {
  selectedPanel: PanelModel | null;
  setSelectedPanel: (panel: PanelModel) => void;
}

const ModelPanel = ({ selectedPanel, setSelectedPanel }: ModelPanelProps) => {
  const [models, setModels] = useState<PanelModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchModels = async () => {
      try {
        const res = await fetch("http://localhost:8080/panels", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(res.statusText);
        const data: PanelModel[] = await res.json();
        setModels(data);

        if (!selectedPanel && data.length > 0) {
          setSelectedPanel(data[0]);
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
    return () => controller.abort();
  }, [selectedPanel, setSelectedPanel]);

  const handleSelectChange = (modelo: string) => {
    const panel = models.find((m) => m.modelo === modelo);
    if (panel) setSelectedPanel(panel);
  };

  if (loading) return <div>Cargando modelos...</div>;
  if (!selectedPanel) return <div>No hay modelos disponibles</div>;

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-sky-50 dark:bg-sky-900 border border-sky-300 dark:border-sky-700 rounded-2xl w-150">
      <select
        value={selectedPanel.modelo}
        onChange={(e) => handleSelectChange(e.target.value)}
        className="dark:bg-sky-600 dark:text-sky-200 border border-sky-400 dark:border-sky-600 rounded-md p-2 w-full"
      >
        {models.map((m) => (
          <option key={m.id} value={m.modelo}>
            {m.modelo}
          </option>
        ))}
      </select>
      {/* Panel gráfico */}
      <div className="relative w-full h-40 bg-sky-200 dark:bg-sky-800 border border-sky-400 dark:border-sky-600 rounded-lg">
        
        <div
          className="grid w-full h-full"
          style={{
            gridTemplateRows: "repeat(6, 1fr)",
            gridTemplateColumns: "repeat(10, 1fr)",
          }}
        >
          
          {Array.from({ length: 60 }).map((_, idx) => (
            <div
              key={idx}
              className="border border-sky-400 dark:border-sky-600 bg-sky-300 dark:bg-sky-700"
            />
          ))}
        </div>
      </div>
      {/* Características */}
      <div className="flex flex-col gap-1 space-y-5 mt-5 text-sm text-sky-900 dark:text-sky-200 w-full">
        <div>
          <span className="font-semibold">Modelo:</span> {selectedPanel.modelo}
        </div>
        <div>
          <span className="font-semibold">Potencia:</span> {selectedPanel.potenciaWp} W
        </div>
        <div>
          <span className="font-semibold">Eficiencia:</span> {selectedPanel.eficiencia}
        </div>
        <div>
          <span className="font-semibold">Area:</span> {selectedPanel.area} m2
        </div>
        <div>
          <span className="font-semibold">Inclinación óptima:</span> {selectedPanel.inclinacion} º
        </div>
      </div>
    </div>
  );
};

export default ModelPanel;
