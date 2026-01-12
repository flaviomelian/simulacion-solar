"use client";

import React from "react";

const Batteries = () => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl bg-zinc-100 dark:bg-yellow-800 border border-yellow-300 dark:border-yellow-700">
      <h3 className="font-semibold text-sm text-yellow-800 dark:text-yellow-100">
        Baterías
      </h3>

      <div className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
        <p>Capacidad total: 10 kWh</p>
        <p>Tipo: LiFePO₄</p>
        <p>Ciclos: &gt;6000</p>
        <p>Prof. descarga: 90%</p>
      </div>
    </div>
  );
};

export default Batteries;
