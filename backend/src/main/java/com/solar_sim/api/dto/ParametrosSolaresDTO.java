// ParametrosSolaresDTO.java
package com.solar_sim.api.dto;

import lombok.Builder;
import lombok.Data;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;

@Data
@Builder
@Schema(name = "ParametrosSolaresDTO", description = "DTO de salida de la estimación solar")
public class ParametrosSolaresDTO {

    @Schema(description = "Lista de irradiancia horaria (W/m²)", example = "[0.0, 100.0, 300.0, 500.0]")
    private List<Double> irradianciaHoraria;

    @Schema(description = "Lista de potencia horaria generada (kW)", example = "[0.0, 5.0, 15.0, 25.0]")
    private List<Double> potenciaHoraria;

    @Schema(description = "Energía diaria generada (kWh)", example = "120.5")
    private Double energiaDiaria;
}