package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

public class UserController {

	@Autowired
	UserService us;
	
//	@PostMapping("/logincheck")
//	public User checkLogin(@RequestBody User u)
//	{
//		return us.loginCheck(u.getUserId(),u.getPassword());
//	}
	
}
