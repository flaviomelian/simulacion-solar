# Módulo de Simulación Solar y Autoconsumo Energético

## Descripción

Este proyecto implementa un **módulo de simulación solar y análisis de autoconsumo energético**, pensado para complementar iniciativas de Edificios Inteligentes y proyectos educativos como SmartEcoSchool. El módulo permite estimar la producción fotovoltaica, simular el reparto de energía y calcular el ahorro económico aproximado, **sin depender de APIs meteorológicas externas**.

El objetivo principal es proporcionar una herramienta de planificación, comparación y optimización energética basada en **modelo físico determinista**.

---

## Características principales

* Cálculo de la **posición solar** (altura y azimut) por latitud, día y hora.
* Estimación de **irradiancia solar incidente** sobre la superficie de paneles.
* Cálculo de **potencia fotovoltaica instantánea** y **energía diaria**.
* Simulación de **reparto energético**:

  * autoconsumo
  * excedente a red
  * energía importada
* Estimación de **ahorro económico**.
* **CRUD de instalaciones simuladas** para crear, actualizar y reutilizar configuraciones fotovoltaicas.
* Endpoint de simulación que permite trabajar con parámetros ad-hoc o con instalaciones simuladas.
* Frontend interactivo en **Next.js** para visualizar la trayectoria solar, potencia y energía diaria.

---

## Tecnologías

* **Backend:** SpringBoot (Java)
* **Frontend:** Next.js
* **Despliegue:** serverless (Vercel u otro) / Servidor dedicado

---

## Endpoints

### Instalaciones simuladas (CRUD)

* `POST /installations`: Crea una instalación
* `GET /installations/{id}`: Recupera una instalación
* `PUT /installations/{id}`: Actualiza una instalación
* `DELETE /installations/{id}`: Elimina una instalación

### Simulación energética

* `GET /solar/estimate`

  * **Entrada:** latitud, día del año, orientación, inclinación, área
  * **Salida:** irradiancia horaria, potencia horaria, energía diaria
  * Puede usar parámetros ad-hoc o una instalación simulada existente

---

## Roadmap del proyecto

1. **Modelo solar y energía (0–3 meses)**

   * Cálculo de trayectoria solar, irradiancia, potencia y energía diaria
   * Dashboard básico

2. **Integración con consumo real (3–6 meses)**

   * Curvas de consumo del edificio
   * Cálculo de autoconsumo y excedentes

3. **Simulación fotovoltaica avanzada (6–12 meses)**

   * Matriz de paneles
   * Comparativa de configuraciones y orientación/inclinación

4. **Optimización energética (12–24 meses)**

   * Ajuste estacional, seguimiento solar y comparación con datos reales

---

## Limitaciones

* No sustituye sistemas meteorológicos ni predicción real de temperatura.
* No reemplaza sensores ni medición de consumo real.
* Su función es **simulación, planificación y apoyo a la decisión**.

---

## Contribución

Cualquier contribución deberá mantener la coherencia con el modelo físico determinista y la claridad en la simulación energética, respetando el alcance educativo y técnico del proyecto.

---

## Licencia

MIT License
