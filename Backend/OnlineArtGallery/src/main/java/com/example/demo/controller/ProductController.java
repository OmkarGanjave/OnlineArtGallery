package com.example.demo.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.AddProduct;
import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductService pservice;
	

	//----------------------------------Customer-----------------------------------
	@GetMapping("/getallproducts")
	public List<Product> getAll()
	{
		return pservice.getAll();
	}
	
	@GetMapping("/getproduct")
	public Product getProduct(@RequestParam("pid") int pid)
	{
		return pservice.getProduct(pid);
				
	}
	
//	@PostMapping("/saveproduct")
//	public Product saveProduct(@RequestBody Product p)
//	{
//		return pservice.save(p);
//	}
	
	//----------------------------------Artist-----------------------------------
	@PostMapping("/addproduct")
	public int addProduct(@RequestPart("product") AddProduct pro, @RequestPart("file") MultipartFile file) 
	{
		
		int psave = pservice.addProduct(pro);
		
		boolean flag = true;
		
		if(file.getSize() > 10 && !(file.getContentType().equals("jpg"))) {
			try {
			byte[] data = file.getBytes();
			
			Path path = Paths.get("images//"+pro.getArtistId()+"_1.jpg");
			
			Files.write(path, data);
			}
			catch (Exception e) {
			
				flag = false;
			}
		}
		if(flag == true) 
		{
			return psave;
		}
		else 
		{
			return 0;
		}
	} 
	
	@GetMapping("/searchproduct/{uid}")
	public List<Product> searchProduct(@PathVariable("uid") String artistId)
	{
		return pservice.searchProduct(artistId);
	}
	
	
	

}
