package com.onlineexam.quiz.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineexam.quiz.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
