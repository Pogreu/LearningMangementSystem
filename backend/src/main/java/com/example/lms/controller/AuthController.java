package com.example.lms.controller;

import com.example.lms.service.AuthService;
import org.springframework.web.bind.annotation.*;

import com.example.lms.model.dto.LoginRequest;
import com.example.lms.model.dto.RegisterRequest;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }
    
    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest loginRequest) {
        return authService.register(loginRequest);
    }
}
