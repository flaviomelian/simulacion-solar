// InstalacionSimuladaRepository.java
package com.solar_sim.api.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.solar_sim.api.model.PlacaFotovoltaica;


@Repository
public interface PlacaFotovoltaicaRepository extends JpaRepository<PlacaFotovoltaica, Long> {
    // Buscar placas por instalación
    List<PlacaFotovoltaica> findByInstalacionId(Long instalacionId);
}