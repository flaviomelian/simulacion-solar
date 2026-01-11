package com.solar_sim.api.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "InstalacionSimulada", description = "Entidad que representa una instalación fotovoltaica simulada")
@Entity
@Table(name = "instalaciones_simuladas")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InstalacionSimulada {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Identificador único de la instalación", example = "1")
    private Long id;

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

    @Schema(description = "Fecha de creación de la instalación")
    private LocalDateTime fechaCreacion;

    @Schema(description = "Fecha de última modificación de la instalación")
    private LocalDateTime fechaModificacion;

    @PrePersist
    protected void onCreate() {
        this.fechaCreacion = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.fechaModificacion = LocalDateTime.now();
    }
   
}