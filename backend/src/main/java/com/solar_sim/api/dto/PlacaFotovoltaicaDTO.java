package com.solar_sim.api.dto;

import lombok.Data;

@Data
public class PlacaFotovoltaicaDTO {
    private Long id;
    private String modelo;
    private Double potenciaWp;
    private Double eficiencia;
    private Double inclinacion;
    private Double area;
}
