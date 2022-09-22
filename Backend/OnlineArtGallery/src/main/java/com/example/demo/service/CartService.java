package com.example.demo.service;

import java.util.List;
import java.util.Optional;

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
	
	public Cart getCartId(int customerId)
	{
	 return	cartrepo.findById(customerId).get();
		
	}
	
////	 checks if cart is present for customer or not and retutn cartId 
////	if cart is present or null if no cart is present 
//	public int checkCartStatus(int customerId)
//	{
//		
//	}

	public boolean removecart(int cartId) 
	{
		boolean flag = true;
		try {
		cartrepo.deleteById(cartId);
		}
		catch (Exception e) {
			// TODO: handle exception
			flag = false;
		}
		return flag;
	}
	
}
