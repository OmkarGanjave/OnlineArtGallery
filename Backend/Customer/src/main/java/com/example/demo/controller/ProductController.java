package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	ProductService ps;
	
	@GetMapping("/getallproducts")
	public List<Product> getAll()
	{
		return ps.getAll();
	}
	
	@GetMapping("/getproduct")
	public Product getProduct(@RequestParam("pid") int pid)
	{
		return ps.getProduct(pid);
				
	}
	
	@PostMapping("/addproduct")
	public Product addProduct(@RequestBody Product product)
	{
		return ps.addProduct(product);
	}
 
	
}
