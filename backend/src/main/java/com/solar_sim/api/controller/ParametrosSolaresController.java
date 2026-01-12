package com.solar_sim.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.solar_sim.api.dto.ParametrosSolaresDTO;
import com.solar_sim.api.model.ParametrosSolares;
import com.solar_sim.api.service.ParametrosSolaresService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/solar/estimate")
@RequiredArgsConstructor
@Tag(name = "Simulación Solar", description = "Estimación de irradiancia, potencia y energía solar")
public class ParametrosSolaresController {

    private final ParametrosSolaresService solarService;

    @GetMapping
    @Operation(summary = "Calcular irradiancia, potencia horaria y energía diaria según parámetros de entrada")
    public ParametrosSolaresDTO estimate(@RequestParam Double latitud,
            @RequestParam Integer diaDelAno,
            @RequestParam Double orientacion,
            @RequestParam Double inclinacion,
            @RequestParam Double area,
            @RequestParam Double eficiencia) {
        ParametrosSolares params = ParametrosSolares.builder()
                .latitud(latitud)
                .diaDelAno(diaDelAno)
                .orientacion(orientacion)
                .inclinacion(inclinacion)
                .area(area)
                .eficiencia(eficiencia)
                .build();
        return solarService.calculate(params);
    }
}