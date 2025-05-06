package com.raicod3.ecommerce.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("file:.env")
public class EnvConfig {

    @Bean
    String JwtSecret() {
        Dotenv dotenv = Dotenv.load();
        return dotenv.get("JWT_SECRET");
    }

}
