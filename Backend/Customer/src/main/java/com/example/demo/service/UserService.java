package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.model.User;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.UserRepository;


@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	CustomerRepository crepo;
	
	public User add(User user)
	{
		return userRepo.save(user);
	}
	
//	public User loginCheck(String userId,String pwd)
//	{
//		User u=userRepo.loginCheck(userId, pwd);
//			if(u.getRole().equals("customer"))
//			{
//				return u;
//			}
//		return null;
//	}
}
