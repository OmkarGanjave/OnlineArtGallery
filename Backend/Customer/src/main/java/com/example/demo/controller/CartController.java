package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.service.CartService;

@RestController
public class CartController {
	@Autowired
	CartService cartService;

	
	@PostMapping("/saveCart/{cid}")
	public int saveCart(@PathVariable("cid") String CustomerId)
	{
		return cartService.saveCartData(CustomerId);
	}
	
	@GetMapping("/allCart")
	public List<Cart> getAll()
	{
		return cartService.getAll();
	}
}
