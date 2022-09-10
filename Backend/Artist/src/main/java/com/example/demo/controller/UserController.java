package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;


@RestController
public class UserController {

	@Autowired
	private UserService userservice;
	
//	@PostMapping("/login")
//	public User checkLogin(@RequestBody User user)
//	{
//		String uid = user.getUserId();
//		String pwd = user.getPassword();
//		
//		User u = null;
//		
//		u = userservice.checkLogin(uid, pwd);
//		
//		return u;
//	}
}
