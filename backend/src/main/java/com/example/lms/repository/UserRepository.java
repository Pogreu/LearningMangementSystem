package com.example.lms.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.lms.model.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
}