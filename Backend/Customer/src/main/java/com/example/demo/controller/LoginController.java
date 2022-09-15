package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Login;
import com.example.demo.service.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

	@Autowired
	private LoginService lservice;
	
	@PostMapping("/login")
	public Object checkLogin(@RequestBody Login log ) 
	{
		//System.out.println(log.getUser_id()+"hear 1"+log.getPassword());
		return lservice.checkLogin(log.getUserId(), log.getPassword());
	}
}
