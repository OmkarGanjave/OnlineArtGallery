package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Order;
import com.example.demo.service.OrderService;


@RestController
public class OrderController {
	@Autowired
	OrderService os;
	
	@PostMapping("/addorder/{cid}/{qty}/{price}")
	public int addOrder(@PathVariable("cid") String customerId ,@PathVariable("qty") int productQty,@PathVariable("price") double totalPrice)
	{
		return os.addOrder(customerId,productQty,totalPrice);
	}
	
	@GetMapping("/getallorders")
	public List<Order> getAll()
	{
		return os.getAll();
	}
	
	@GetMapping("/getorderbyid/{orderId}")
	public Order getOrderById(@PathVariable int orderId)
	{
		return os.getOrderById(orderId);
	}
	
//	@PostMapping("/saveorder")
//	public Order saveOrder(@RequestBody Order o)
//	{
//		return os.save(o);
//	}

	
}
