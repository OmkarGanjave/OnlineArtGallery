package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
//import com.example.demo.model.AddCartDetails;
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
//	public AddCartDetails saveCartDetails(AddCartDetails c) 
//	{
//		
//		return cartDetailsRepo.save(c);
//	}
	
	// check product into cart deatils table
	public boolean checkProduct(Cart cart, int productid)
	{
		boolean flag = true;
		
		int cartID = cart.getCartId();
		
		System.out.println("caty iD :- "+cartID);
		
		List<CartDetails> cartdeatils = cart.getCartdetails();
		
		for (CartDetails cd : cartdeatils)
		{
			if(cd.getProduct().getProductId() == productid) 
			{
				flag = false;
				break;
			}
		}
		
		return flag;
	} 
	
}
