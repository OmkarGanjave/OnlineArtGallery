package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CartDetails;
import com.example.demo.repository.CartDetailsRepository;

@Service
public class CartDetailsService {

	@Autowired
	private CartDetailsRepository cartDetailsRepo;
	
	public List<CartDetails> getAll() 
	{
		return cartDetailsRepo.findAll();
	}
	public CartDetails saveCartDetails(CartDetails c) 
	{
		return cartDetailsRepo.save(c);
	}
}
