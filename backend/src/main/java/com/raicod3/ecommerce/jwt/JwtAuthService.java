package com.raicod3.ecommerce.jwt;

import com.raicod3.ecommerce.custom.CustomUserDetailsService;
import com.raicod3.ecommerce.dto.AuthResponse;
import com.raicod3.ecommerce.dto.LoginRequest;
import com.raicod3.ecommerce.dto.RegisterRequest;
import com.raicod3.ecommerce.model.User;
import com.raicod3.ecommerce.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtAuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;

    public JwtAuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtils jwtUtils, AuthenticationManager authenticationManager, CustomUserDetailsService customUserDetailsService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
        this.customUserDetailsService = customUserDetailsService;
    }

    public AuthResponse register (RegisterRequest registerRequest) {
        User user = new User();
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        userRepository.save(user);

        UserDetails userDetails = customUserDetailsService.loadUserByUsername(registerRequest.getEmail());

        String token = jwtUtils.generateToken(userDetails);

        return new AuthResponse(token);
    }

    // this method can be used for both login and authentication of token
    public AuthResponse authenticate (LoginRequest loginRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(loginRequest.getEmail());
        String token = jwtUtils.generateToken(userDetails);
        return new AuthResponse(token);
    }
}
