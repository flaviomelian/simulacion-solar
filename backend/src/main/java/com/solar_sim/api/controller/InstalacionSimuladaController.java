package com.solar_sim.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.solar_sim.api.dto.InstalacionSimuladaDTO;
import com.solar_sim.api.model.InstalacionSimulada;
import com.solar_sim.api.service.InstalacionSimuladaService;

import java.util.List;

@RestController
@RequestMapping("/installations")
@RequiredArgsConstructor
@Tag(name = "Instalaciones Simuladas", description = "CRUD de instalaciones fotovoltaicas simuladas")
public class InstalacionSimuladaController {

    private final InstalacionSimuladaService instalationService;

    @GetMapping
    @Operation(summary = "Obtener todas las instalaciones simuladas")
    public List<InstalacionSimulada> getAll() {
        return instalationService.getAll();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener una instalación por su ID")
    public InstalacionSimulada getById(@PathVariable Long id) {
        return instalationService.getById(id);
    }

    @PostMapping
    @Operation(summary = "Crear una nueva instalación simulada")
    public InstalacionSimulada create(@RequestBody InstalacionSimuladaDTO dto) {
        return instalationService.create(dto);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar una instalación simulada existente")
    public InstalacionSimulada update(@PathVariable Long id, @RequestBody InstalacionSimuladaDTO dto) {
        return instalationService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar una instalación simulada")
    public void delete(@PathVariable Long id) {
        instalationService.delete(id);
    }
}