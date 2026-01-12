import Image from "next/image";
import { Cpu, SolarPanel } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-gray-950 rounded-2xl">
      <main className="flex w-full max-w-3xl flex-row items-center justify-between py-18 bg-white dark:bg-gray-950 sm:items-start">
        <div className="flex flex-col mb-10">
          {/* Bloque fotovoltaico */}
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              Energía Fotovoltaica: Beneficios Reales
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-7 mt-2">
              La energía solar fotovoltaica reduce la dependencia de
              combustibles fósiles, disminuye la emisión de CO₂ y protege el
              medio ambiente. Además, genera ahorros económicos a largo plazo al
              disminuir costes de electricidad y crear oportunidades de empleo
              en el sector de energías limpias.
            </p>
          </div>

          {/* Título y descripción principal */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left mt-30">
            <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Simulación y gestión instalaciones fotovoltaicas
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-2">
              Esta aplicación permite crear y administrar{" "}
              <strong>instalaciones solares simuladas</strong>, gestionar{" "}
              <strong>placas fotovoltaicas</strong> y explorar cómo distintos
              parámetros afectan la eficiencia. Todo está diseñado para ser
              intuitivo y rápido, usando{" "}
              <strong>Spring Boot en el backend</strong> y
              <strong> Next.js con Tailwind</strong> en el frontend.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start mb-10 ml-56 mt-20 space-y-66">
          <SolarPanel
            size={108}
            className="text-gray-400 hover:text-white 
             transition-colors duration-500 ease-in-out
             before:absolute before:inset-0 before:rounded-full
             before:bg-gradient-radial before:from-white before:via-white/30 before:to-transparent
             before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-500"
          />
          <Cpu
            size={108}
            className="text-gray-400 hover:text-white 
             transition-colors duration-500 ease-in-out
             before:absolute before:inset-0 before:rounded-full
             before:bg-gradient-radial before:from-white before:via-white/30 before:to-transparent
             before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-500"
          />
        </div>
      </main>
    </div>
  );
}
