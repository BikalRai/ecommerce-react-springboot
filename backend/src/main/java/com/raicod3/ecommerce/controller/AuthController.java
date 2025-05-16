package com.raicod3.ecommerce.controller;

import com.raicod3.ecommerce.dto.AuthResponse;
import com.raicod3.ecommerce.dto.LoginRequest;
import com.raicod3.ecommerce.dto.RegisterRequest;
import com.raicod3.ecommerce.jwt.JwtAuthService;
import com.raicod3.ecommerce.model.User;
import com.raicod3.ecommerce.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtAuthService jwtAuthService;

   public AuthController(JwtAuthService jwtAuthService) {
       this.jwtAuthService = jwtAuthService;
   }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(jwtAuthService.authenticate(loginRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(jwtAuthService.register(registerRequest));
    }

}
