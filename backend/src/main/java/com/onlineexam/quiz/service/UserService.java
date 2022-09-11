package com.onlineexam.quiz.service;

import java.util.Set;

import com.onlineexam.quiz.model.User;
import com.onlineexam.quiz.model.UserRole;

public interface UserService {
	
	//create user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	//get user by username
	public User getUser(String username);
	
	//delete user by id
	public void deleteUser(Long userId);
	
	//get all users
	public Set<User> getUsers();
	
	// update user
	public User updateUser(Long id, User user) throws Exception;
}
