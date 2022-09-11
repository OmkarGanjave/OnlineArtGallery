package com.example.demo.service;

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
	
//	public Object checkLogin(String uid,String pwd) 
//	{
//		List<Object[]> ulist = userepo.checkLogin(uid, pwd);
//		
//		User u = null;
//		if(ulist.size() == 1)
//		{
//			if(ulist.get(0)[0].equals("Artist")) 
//			{
//				Optional<User> ou =  userepo.findById((int)ulist.get(0)[1]);
//				
//				try 
//				{
//					u = ou.get();
//				}
//				catch (Exception e) {
//					// TODO: handle exception
//					u = null;
//				}
//			}
//		}
//		return u;
//	}
}
