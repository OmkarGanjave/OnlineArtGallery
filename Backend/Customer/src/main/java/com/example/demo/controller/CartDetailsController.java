package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.model.CartDetails;
import com.example.demo.service.CartDetailsService;

@RestController
public class CartDetailsController {
	
	@Autowired
	CartDetailsService cartDetailsService;
	@GetMapping("/CartDetails")
	public List<CartDetails> getAll()
	{
		return cartDetailsService.getAll();
	}
	@PostMapping("/SaveCartDetails")
	public CartDetails saveCartDetails(@RequestBody CartDetails c) 
	{
		return cartDetailsService.saveCartDetails(c);
	}
	
}
