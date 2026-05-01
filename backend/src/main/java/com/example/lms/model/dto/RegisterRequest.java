package com.example.lms.model.dto;

import com.example.lms.model.enums.UserRole;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {
    private String email;
    private String password;
    private UserRole role;
}
