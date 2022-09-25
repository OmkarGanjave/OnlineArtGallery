package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Artist;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.service.AdminService;
import com.example.demo.service.ArtistService;
import com.example.demo.service.CustomerService;
import com.example.demo.service.ProductService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {

	@Autowired
	private ArtistService artistserv;
	
	@Autowired
	private CustomerService custserv;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AdminService adminserv;
	
	@GetMapping("/manageaccount/{loginId}/{status}")
	public User manageUsers(@PathVariable("loginId") int loginId,@PathVariable("status") int status) 
	{
		User user = userService.getUserById(loginId);
		
		user.setStatus(status);
		
		return userService.saveUser(user);
	}
	
	// get All Product --> only active artist's product
	@GetMapping("/allproducts")
	public List<Product> allProducts()
	{
		return adminserv.allProducts();
		
	}
	
	
	// review rating of artist's
	@GetMapping("/reviewRating")
	public List<Artist> getReview()
	{
		return adminserv.getActiveArtist();
		
	}
	
	
}
