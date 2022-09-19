package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;

@Service
public class OrderService {
	@Autowired
	OrderRepository orderRepo;
	
	public int  addOrder(String customerId,int productQty,double totalPrice )
	{
		 List<Object[]> login=orderRepo.getLoginId(customerId);
		 List<Object[]> customerID= orderRepo.getCustomerId((int)login.get(0)[0]);
		 return orderRepo.addOrder((int)customerID.get(0)[0], productQty, totalPrice);
		 
	}
	
	public List<Order> getAll()
	{
		return orderRepo.findAll();
	}
	
	public Order getOrderById(int orderId)
	{
		return  orderRepo.findById(orderId).get();
	}
	
	public List<Order> searchOrder(String customerId)
	{
		List<Object[]> loginId = orderRepo.getLoginId(customerId);
		
		List<Object[]> customer=orderRepo.getCustomerId((int)loginId.get(0)[0]);
		
		return orderRepo.getOrderById((int)customer.get(0)[0]);
	}
	
	public Order saveOrder(Order o)
	{
		return orderRepo.save(o);
	}
	
}
