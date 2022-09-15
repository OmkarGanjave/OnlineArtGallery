package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.model.CustomerRegister;
import com.example.demo.model.Order;
import com.example.demo.model.User;
import com.example.demo.service.CustomerService;
import com.example.demo.service.OrderService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

		@Autowired
		CustomerService cs;
		@Autowired
		UserService us;
		@Autowired
		OrderService os;
		
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
		
		
		
	}


