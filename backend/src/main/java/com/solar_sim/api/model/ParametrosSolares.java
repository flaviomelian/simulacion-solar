package com.solar_sim.api.model;

import lombok.Builder;
import lombok.Data;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Data
@Entity
@Table(name = "parametros_solares")
@Builder
@Schema(name = "ParametrosSolares", description = "Parámetros de entrada para calcular irradiancia y energía solar")
public class ParametrosSolares {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Schema(description = "Latitud geográfica de la ubicación", example = "40.4168")
    private Double latitud;

    @Schema(description = "Día del año (1-365)", example = "172")
    private Integer diaDelAno;

    @Schema(description = "Azimut de la superficie/paneles en grados", example = "180.0")
    private Double orientacion;

    @Schema(description = "Ángulo de inclinación de la superficie/paneles en grados", example = "30.0")
    private Double inclinacion;

    @Schema(description = "Área de la superficie en m²", example = "50.0")
    private Double area;

    @Schema(description = "Eficiencia de conversión de la instalación (0-1)", example = "0.18")
    private Double eficiencia;
}
