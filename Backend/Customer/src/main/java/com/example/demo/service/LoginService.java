package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;
	
	public Login checkLogin(String uid,String pwd) 
	{

		
		Login u = loginRepository.findByUid(uid, pwd);
		
		if(u.getRole().equals("customer")) 
		{
			return u;
		}
			
		return null;
		
	
		
		
	}
}
