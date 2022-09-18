package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.model.CartDetails;
import com.example.demo.model.Customer;
import com.example.demo.model.CustomerRegister;
import com.example.demo.model.Order;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.service.CartDetailsService;
import com.example.demo.service.CartService;
import com.example.demo.service.CustomerService;
import com.example.demo.service.ProductService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

		@Autowired
		CustomerService cs;
		
		@Autowired
		UserService us;
		
		@Autowired
		ProductService pservice;
		
		@Autowired
		CartService cartServ;
		
		@Autowired
		CartDetailsService cdserv;
		
		@PostMapping("/register")
		public Customer saveCustomer(@RequestBody CustomerRegister cr) 
		{
			User user=new User(cr.getUserId(),"customer",cr.getPassword());
			User inserted=us.add(user);
			Customer customer=new Customer( cr.getFirstName(), cr.getLastName(),cr.getEmailId(),cr.getContactNo(),cr.getAddress(), inserted);
			return cs.saveCustomer(customer);
		}
		
		@GetMapping("/allcustomers")
		public List<Customer> getAll()
		{
			return cs.getAll();
		}
		
		@GetMapping("/addTocart/{loginid}/{productid}")
		public Cart addCart(@PathVariable("loginid") int loginid,@PathVariable("productid") int productId)
		{
			System.out.println("login id :- "+loginid+"\tpid :- "+productId);
			
			// get product
			Product product = pservice.getProduct(productId);
			
			// get customer
			Customer customer = cs.getCustomerById(loginid);
			
			// get cart
			Cart cart = customer.getCart();
			
			System.out.println("Cart:"+cart);
			
			// if cart is null , then create new cart
			if(null==cart) 
			{
	    		cart=new Cart();
	    		customer.setCart(cart);
		    	cart.setCustomerID(customer);
	    	}
			
			// cart details is null , then create new cart details
			if(null==customer.getCart().getCartdetails()) 
			{
				customer.getCart().setCartdetails(new ArrayList<CartDetails>());
			}
			
			System.out.println("size of cart:"+ customer.getCart().getCartdetails().size());
			
			CartDetails cartdeatils = new CartDetails();
			if(cdserv.checkProduct(cart, productId)) 
			{
				cartdeatils.setProduct(product);
				
				cartdeatils.setCart(cart);
				
				customer.getCart().getCartdetails().add(cartdeatils);
				
				cs.saveCustomer(customer);
			}
			
			return cart; 
		}
		
		
		
		
	}


