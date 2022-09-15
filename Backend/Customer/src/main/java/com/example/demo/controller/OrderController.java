package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.service.OrderService;

@RestController
public class OrderController {

	@Autowired
	OrderService os;
	
	@GetMapping("/getallorders")
	public List<Order> getAll()
	{
		return os.getAll();
	}
}
