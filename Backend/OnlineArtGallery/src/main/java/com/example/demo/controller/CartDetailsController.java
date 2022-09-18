package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.model.CartDetails;
import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.service.CartDetailsService;
import com.example.demo.service.CartService;

@RestController
public class CartDetailsController {
	
	@Autowired
	CartDetailsService cartDetailsService;
	@Autowired
	CartService cartservice;
	@Autowired
	CustomerRepository custrepo;
	
	@GetMapping("/CartDetails")
	public List<CartDetails> getAll()
	{
		return cartDetailsService.getAll();
	}
//	@PostMapping("/SaveCartDetails")
//	public CartDetails saveCartDetails(@RequestParam("customerId") int customerId, @RequestParam("productId") int productId) 
//	{
//		Cart cartId=cartservice.getCartId(customerId);
//		Product produc
//		CartDetails cart=new CartDetails(productId, cartId);
//		return cartDetailsService.saveCartDetails(cart);
//	} 
	
}
 