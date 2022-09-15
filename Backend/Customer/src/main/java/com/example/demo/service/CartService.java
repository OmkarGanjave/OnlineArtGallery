package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.repository.CartRepository;

@Service
public class CartService {
	
	@Autowired
	CartRepository cartrepo;
	

	public int saveCartData(String CustomerId)
	{
		List<Object[]> loginid = cartrepo.getUid(CustomerId);
		
		List<Object[]> customerId = cartrepo.customerId((int)loginid.get(0)[0]);
		
		return cartrepo.addToCart((int)customerId.get(0)[0]);
	}
	public List<Cart> getAll()
	{
		return cartrepo.findAll();
	}

	
	
}
