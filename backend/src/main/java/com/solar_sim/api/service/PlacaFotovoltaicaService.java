package com.solar_sim.api.service;

import com.solar_sim.api.dto.PlacaFotovoltaicaDTO;
import com.solar_sim.api.model.PlacaFotovoltaica;
import com.solar_sim.api.repository.PlacaFotovoltaicaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlacaFotovoltaicaService {

    private final PlacaFotovoltaicaRepository repository;

    public List<PlacaFotovoltaicaDTO> getAllDTO() {
        return repository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public PlacaFotovoltaicaDTO getByIdDTO(Long id) {
        return repository.findById(id)
                .map(this::toDTO)
                .orElse(null);
    }

    private PlacaFotovoltaicaDTO toDTO(PlacaFotovoltaica placa) {
        PlacaFotovoltaicaDTO dto = new PlacaFotovoltaicaDTO();
        dto.setId(placa.getId());
        dto.setModelo(placa.getModelo());
        dto.setPotenciaWp(placa.getPotenciaWp());
        dto.setEficiencia(placa.getEficiencia());
        dto.setArea(placa.getArea());
        dto.setInclinacion(placa.getInclinacion());
        return dto;
    }

    public List<PlacaFotovoltaica> getAll() {
        return repository.findAll();
    }

    public Optional<PlacaFotovoltaica> getById(Long id) {
        return repository.findById(id);
    }

    public PlacaFotovoltaica save(PlacaFotovoltaica placa) {
        return repository.save(placa);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public List<PlacaFotovoltaica> getByInstalacion(Long instalacionId) {
        return repository.findByInstalacionId(instalacionId);
    }
}
