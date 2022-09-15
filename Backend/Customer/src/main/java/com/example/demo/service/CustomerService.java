package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.model.Order;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.OrderRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository custRepo;
	@Autowired
	OrderRepository orderrepo;
	
	public  Customer saveCustomer(Customer cust)
	{
		return custRepo.save(cust);
	}	

	public List<Customer> getAll()
	{
		return custRepo.findAll();
	}
	
	public Order saveOrder(Order order)
	{
		return orderrepo.save(order);
	}
}
