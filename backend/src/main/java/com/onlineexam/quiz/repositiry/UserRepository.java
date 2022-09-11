package com.onlineexam.quiz.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineexam.quiz.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User getUserByUsername(String username);
}
