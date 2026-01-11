import React from 'react';

const ModelPanel = () => {
  // Datos de ejemplo creíbles
  const panelData = {
    modelo: "SPX-300",
    potencia: "300 W",
    eficiencia: "20%",
    dimensiones: "1.6 m x 1 m",
    inclinacionOptima: "30°",
    tipo: "Monocristalino",
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-sky-50 dark:bg-sky-900 border border-sky-300 dark:border-sky-700 rounded-2xl w-150">
      {/* Panel dibujado */}
      <div className="relative w-full h-40 bg-sky-200 dark:bg-sky-800 border border-sky-400 dark:border-sky-600 rounded-lg">
        {/* Simulación de celdas solares en grid */}
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
      <div className="flex flex-col gap-1 text-sm text-sky-900 dark:text-sky-200 w-full">
        <div>
          <span className="font-semibold">Modelo:</span> {panelData.modelo}
        </div>
        <div>
          <span className="font-semibold">Potencia:</span> {panelData.potencia}
        </div>
        <div>
          <span className="font-semibold">Eficiencia:</span> {panelData.eficiencia}
        </div>
        <div>
          <span className="font-semibold">Dimensiones:<br/></span> {panelData.dimensiones}
        </div>
        <div>
          <span className="font-semibold">Inclinación óptima:</span> {panelData.inclinacionOptima}
        </div>
        <div>
          <span className="font-semibold">Tipo:</span> {panelData.tipo}
        </div>
      </div>
    </div>
  );
};

export default ModelPanel;
