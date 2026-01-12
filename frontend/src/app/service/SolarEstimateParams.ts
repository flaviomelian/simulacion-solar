// services/solarService.ts
export interface SolarEstimateParams {
  latitud: number;
  diaDelAno: number;
  orientacion: number; // azimut panel
  inclinacion: number; // tilt panel
  area: number;        // m²
  eficiencia: number;  // 0-1
}

export interface SolarEstimateDTO {
  irradiancia: number;
  potenciaHoraria: number;
  energiaDiaria: number;
}

export async function getSolarEstimate(params: SolarEstimateParams): Promise<SolarEstimateDTO> {
  const query = new URLSearchParams({
    latitud: String(params.latitud),
    diaDelAno: String(params.diaDelAno),
    orientacion: String(params.orientacion),
    inclinacion: String(params.inclinacion),
    area: String(params.area),
    eficiencia: String(params.eficiencia),
  }).toString();

  const res = await fetch(`http://localhost:8080/solar/estimate?${query}`);
  if (!res.ok) throw new Error('Error fetching solar estimate');
  return res.json();
}
