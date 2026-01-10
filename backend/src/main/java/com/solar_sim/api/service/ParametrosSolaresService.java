package com.solar_sim.api.service;

import org.springframework.stereotype.Service;

import com.solar_sim.api.dto.ParametrosSolaresDTO;
import com.solar_sim.api.model.ParametrosSolares;

import java.util.ArrayList;
import java.util.List;

@Service
public class ParametrosSolaresService {

    /**
     * Calcula la estimación solar: irradiancia horaria, potencia horaria y energía diaria
     * @param params parámetros de entrada para el cálculo
     * @return DTO con resultados
     */
    public ParametrosSolaresDTO calculate(ParametrosSolares params) {
        List<Double> irradianciaHoraria = new ArrayList<>();
        List<Double> potenciaHoraria = new ArrayList<>();
        double energiaDiaria = 0.0;

        // Simulación simple: ejemplo lineal de irradiancia de 6am a 18pm
        for (int hora = 0; hora < 24; hora++) {
            double irradiancia = 0.0;
            if (hora >= 6 && hora <= 18) {
                irradiancia = 1000 * Math.sin(Math.PI * (hora - 6) / 12.0); // ejemplo simple
            }
            double potencia = irradiancia * params.getArea() * params.getEficiencia() / 1000.0; // kW

            irradianciaHoraria.add(irradiancia);
            potenciaHoraria.add(potencia);
            energiaDiaria += potencia;
        }

        ParametrosSolaresDTO dto = ParametrosSolaresDTO.builder()
                .irradianciaHoraria(irradianciaHoraria)
                .potenciaHoraria(potenciaHoraria)
                .energiaDiaria(energiaDiaria)
                .build();

        return dto;
    }
}