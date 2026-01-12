"use client";

import React from "react";

const Inverter = () => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl bg-blue-100 dark:bg-blue-800 border border-blue-300 dark:border-blue-700">
      <h3 className="font-semibold text-sm text-blue-800 dark:text-blue-100">
        Inversor
      </h3>

      <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
        <p>Potencia nominal: 5 kW</p>
        <p>Rendimiento: 97%</p>
        <p>Tipo: Monofásico</p>
        <p>MPPT: 2 entradas</p>
      </div>
    </div>
  );
};

export default Inverter;
