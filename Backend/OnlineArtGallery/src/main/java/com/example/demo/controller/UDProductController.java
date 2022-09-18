package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.UDProductService;

@RestController
public class UDProductController {

	@Autowired
	UDProductService uservice;
	
	@GetMapping("/updateudproductprice/{price}/{productId}")
	public int updatePrice(@PathVariable("price") double price,@PathVariable("productId") int productId)
	{
		return uservice.updatePrice(price, productId);
	}
	
	
	@GetMapping("/updateudproductcategory/{categoryId}/{productId}")
	public int updateCategory(@PathVariable("categoryId") int categoryId,@PathVariable("productId") int productId)
	{
		return uservice.updateCategory(categoryId, productId);
	}
	
	@GetMapping("/updateudproductname/{productName}/{productId}")
	public int updateProductName(@PathVariable("productName") String productName,@PathVariable("productId") int productId)
	{
		return uservice.updateProductName(productName, productId);
	}
	
	@GetMapping("/updateudproductdesc/{productDesc}/{productId}")
	public int updateProductDesc(@PathVariable("productDesc") String productDesc,@PathVariable("productId") int productId)
	{
		return uservice.updateproductDesc(productDesc, productId);
	}
	
	
	//delete
	@GetMapping("/deleteproduct/{productId}")
	public boolean deleteProduct(@PathVariable("productId") int productId)
	{
		return uservice.deleteProduct(productId);
	}
}
