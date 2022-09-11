package com.onlineexam.quiz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.onlineexam.quiz.service.UserService;

@SpringBootApplication
public class ClassroomQuizApplication implements CommandLineRunner{

	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(ClassroomQuizApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Project Started...");
		System.out.println("Open Frount page...................");
		
		/*
		 * User user = new User();
		 * 
		 * user.setFirstName("Avinash"); user.setLastName("Kushwaha");
		 * user.setUsername("Avinash");
		 * user.setPassword(this.bCryptPasswordEncoder.encode("abc123"));
		 * user.setEmail("avinashkushwaha06@gmail.com"); user.setPhone("9993729698");
		 * user.setProfile("default.png"); Role role1 = new Role();
		 * role1.setRoleId(44L); role1.setRoleName("ADMIN");
		 * 
		 * Set<UserRole> userRoleSet = new HashSet<>(); UserRole userRole = new
		 * UserRole(); userRole.setRole(role1); userRole.setUser(user);
		 * 
		 * userRoleSet.add(userRole);
		 * 
		 * User user1 = this.userService.createUser(user, userRoleSet);
		 * System.out.println(user1.getUsername());
		 */	}

}
