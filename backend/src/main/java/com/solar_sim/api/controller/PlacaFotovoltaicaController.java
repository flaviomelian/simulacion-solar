package com.solar_sim.api.controller;

import com.solar_sim.api.dto.PlacaFotovoltaicaDTO;
import com.solar_sim.api.model.PlacaFotovoltaica;
import com.solar_sim.api.service.PlacaFotovoltaicaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/panels")
@RequiredArgsConstructor
public class PlacaFotovoltaicaController {

    private final PlacaFotovoltaicaService service;

    @GetMapping
    public List<PlacaFotovoltaicaDTO> getAll() {
        return service.getAllDTO();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlacaFotovoltaicaDTO> getById(@PathVariable Long id) {
        PlacaFotovoltaicaDTO dto = service.getByIdDTO(id);
        if (dto == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<PlacaFotovoltaica> create(@RequestBody PlacaFotovoltaica placa) {
        return new ResponseEntity<>(service.save(placa), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlacaFotovoltaica> update(@PathVariable Long id, @RequestBody PlacaFotovoltaica placa) {
        return service.getById(id)
                .map(existing -> {
                    placa.setId(id);
                    return ResponseEntity.ok(service.save(placa));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/instalacion/{instalacionId}")
    public List<PlacaFotovoltaica> getByInstalacion(@PathVariable Long instalacionId) {
        return service.getByInstalacion(instalacionId);
    }
}
