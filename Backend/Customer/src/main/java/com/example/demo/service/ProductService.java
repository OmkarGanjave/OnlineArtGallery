package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productrepo;
	
	public List<Product> getAll()
	{
		return productrepo.findAll();
	}
	
	public Product getProduct(int pid)
	{
		return productrepo.findById(pid).get();
	}
	
	public Product addProduct(Product product)
	{
		return productrepo.save(product);
	}
	

}
