package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userepo;
	
	public User add(User artist) 
	{
		 return userepo.save(artist);
	}
	
	public List<User> getUser() 
	{
		List<User> list=userepo.findAll();
		List<User> newlist=new ArrayList<User>();
		for (User u : list) {
			
			if(!u.getRole().equals("Admin"))
				newlist.add(u);
		}
		
		return newlist;
	}
	
	public User saveUser(User u) 
	{
		return userepo.save(u);
	}
	
	public User getUserById(int loginId) 
	{
		return userepo.findById(loginId).get();
	}
	
	
	
}
