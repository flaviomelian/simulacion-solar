// SolarSim.tsx
"use client";

import React, { useState } from "react";
import HorizontalPanel from "./HorizontalPanel";
import VerticalPanel from "./VerticalPanel";
import ModelPanel from "./ModelPanel";

const SolarSim = () => {
  const [peakHeight, setPeakHeight] = useState(80); // altura máxima de la parábola
  const [sunPos, setSunPos] = useState(50); // posición del sol 0-100

  return (
    <div className="flex flex-row items-start justify-center gap-12 max-w-4xl">
      <HorizontalPanel
        peakHeight={peakHeight}
        setPeakHeight={setPeakHeight}
        sunPos={sunPos}
        setSunPos={setSunPos} // sincronizamos el slider
      />
      <VerticalPanel peakHeight={peakHeight} sunPos={sunPos} />
      <ModelPanel/>
    </div>
  );
};

export default SolarSim;
