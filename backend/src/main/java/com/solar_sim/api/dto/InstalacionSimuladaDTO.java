package com.solar_sim.api.dto;

import lombok.Builder;
import lombok.Data;
import io.swagger.v3.oas.annotations.media.Schema;

@Data
@Builder
@Schema(name = "InstalacionSimuladaDTO", description = "DTO para crear o actualizar una instalación simulada")
public class InstalacionSimuladaDTO {

    @Schema(description = "Nombre descriptivo de la instalación", example = "Techo Principal")
    private String nombre;

    @Schema(description = "Latitud geográfica de la instalación", example = "40.4168")
    private Double latitud;

    @Schema(description = "Longitud geográfica de la instalación", example = "-3.7038")
    private Double longitud;

    @Schema(description = "Orientación de los paneles en grados (azimut)", example = "180.0")
    private Double orientacion;

    @Schema(description = "Ángulo de inclinación de los paneles en grados", example = "30.0")
    private Double inclinacion;

    @Schema(description = "Área total de paneles en metros cuadrados", example = "50.0")
    private Double area;

    @Schema(description = "Eficiencia global de la instalación (0-1)", example = "0.18")
    private Double eficiencia;
}