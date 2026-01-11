package com.solar_sim.api.service;

import com.solar_sim.api.model.PlacaFotovoltaica;
import com.solar_sim.api.repository.PlacaFotovoltaicaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlacaFotovoltaicaService {

    private final PlacaFotovoltaicaRepository repository;

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
