package com.onlineexam.quiz.service.impl;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineexam.quiz.model.User;
import com.onlineexam.quiz.model.UserRole;
import com.onlineexam.quiz.repositiry.RoleRepository;
import com.onlineexam.quiz.repositiry.UserRepository;
import com.onlineexam.quiz.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	//Create User Function
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepository.getUserByUsername(user.getUsername());
		if(local != null) {
			System.out.println("User Already Exists..");
			throw new Exception("User Exists Exception");
		}
		else {
			//create user
			for(UserRole ur: userRoles) {
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
		}
		return local;
	}

	@Override
	public User getUser(String username) {
		return this.userRepository.getUserByUsername(username);
		
	}

	@Override
	public void deleteUser(Long userId) {
		this.userRepository.deleteById(userId);
	}

	@Override
	public Set<User> getUsers() {
		return new HashSet<>(this.userRepository.findAll());
	}

	@Override
	public User updateUser(Long id, User user) throws Exception {
		
		Optional<User> findById = this.userRepository.findById(id);
		if(findById == null) {
			throw new Exception("User not found.");
		}
		User save = this.userRepository.save(user);
		return save;
	}

}
