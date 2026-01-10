// InstalacionSimuladaRepository.java
package com.solar_sim.api.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.solar_sim.api.model.InstalacionSimulada;


@Repository
public interface InstalacionSimuladaRepository extends JpaRepository<InstalacionSimulada, Long> {}