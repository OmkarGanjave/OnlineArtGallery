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
		String role="undefined";
		if((u.getRole().equals("Artist")||u.getRole().equals("Customer")||u.getRole().equals("Admin")) && (u.getStatus()==1)) 
			return u;
		else
		return null;
		
	}
}
