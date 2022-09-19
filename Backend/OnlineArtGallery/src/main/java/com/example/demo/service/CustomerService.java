package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository custRepo;
	
	public  Customer saveCustomer(Customer cust)
	{
		return custRepo.save(cust);
	}

	public List<Customer> getAll()
	{
		return custRepo.findAll();
	}
	
	//
	public Customer getCustomer(int loginId) 
	{
		return custRepo.getCustomer(loginId);
	}
	
	//
	public Customer getCustomerById(int customerId) 
	{
		return custRepo.findById(customerId).get();
	}
	
	
}
