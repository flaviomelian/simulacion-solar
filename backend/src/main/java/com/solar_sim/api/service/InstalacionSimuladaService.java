package com.solar_sim.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.solar_sim.api.dto.InstalacionSimuladaDTO;
import com.solar_sim.api.model.InstalacionSimulada;
import com.solar_sim.api.repository.InstalacionSimuladaRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InstalacionSimuladaService {

    private final InstalacionSimuladaRepository repository;

    public List<InstalacionSimulada> getAll() {
        return repository.findAll();
    }

    public InstalacionSimulada getById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Instalación no encontrada"));
    }

    public InstalacionSimulada create(InstalacionSimuladaDTO dto) {
        InstalacionSimulada instalacion = InstalacionSimulada.builder()
                .nombre(dto.getNombre())
                .latitud(dto.getLatitud())
                .longitud(dto.getLongitud())
                .orientacion(dto.getOrientacion())
                .inclinacion(dto.getInclinacion())
                .area(dto.getArea())
                .eficiencia(dto.getEficiencia())
                .fechaCreacion(LocalDateTime.now())
                .build();
        return repository.save(instalacion);
    }

    public InstalacionSimulada update(Long id, InstalacionSimuladaDTO dto) {
        InstalacionSimulada instalacion = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Instalación no encontrada"));
        
        instalacion.setNombre(dto.getNombre());
        instalacion.setLatitud(dto.getLatitud());
        instalacion.setLongitud(dto.getLongitud());
        instalacion.setOrientacion(dto.getOrientacion());
        instalacion.setInclinacion(dto.getInclinacion());
        instalacion.setArea(dto.getArea());
        instalacion.setEficiencia(dto.getEficiencia());

        return repository.save(instalacion);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}