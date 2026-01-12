package com.solar_sim.api.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "placas_fotovoltaicas")
public class PlacaFotovoltaica {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modelo;
    private Double potenciaWp;
    private Double eficiencia;
    private Double area;
    private Double inclinacion;
    private String tipo;
    @ManyToOne
    private InstalacionSimulada instalacion;
}
