package com.solar_sim.api;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SolarSimBackendApplication {

    public static void main(String[] args) {
        // Cargar variables de entorno desde .env
        Dotenv dotenv = Dotenv.load(); // carga el .env del proyecto
        System.setProperty("spring.datasource.url", dotenv.get("SPRING_DATASOURCE_URL"));
        System.setProperty("spring.datasource.username", dotenv.get("SPRING_DATASOURCE_USERNAME"));
        System.setProperty("spring.datasource.password", dotenv.get("SPRING_DATASOURCE_PASSWORD"));
        System.setProperty("spring.jpa.hibernate.ddl-auto", dotenv.get("SPRING_JPA_HIBERNATE_DDL_AUTO"));

        // Imprime ejemplo de variable para debug
        System.out.println("DB URL: " + dotenv.get("SPRING_DATASOURCE_URL"));

        SpringApplication.run(SolarSimBackendApplication.class, args);
    }
}
