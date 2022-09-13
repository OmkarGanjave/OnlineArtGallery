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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductService pservice;
	@GetMapping("/product")
	public List<Product> getAll()
	{
		return pservice.getAll();
	}
	
	@PostMapping("/addproduct")
	public Product addProduct(@RequestPart("product") Product pro, @RequestPart("file") MultipartFile file) 
	{
		
		Product psave = pservice.addProduct(pro);
		
		boolean flag = true;
		
		if(file.getSize() > 10 && !(file.getContentType().equals("jpg"))) {
			try {
			byte[] data = file.getBytes();
			
			Path path = Paths.get("images//"+psave.getPid()+"_1.jpg");
			
			Files.write(path, data);
			}
			catch (Exception e) {
				// TODO: handle exception
				flag = false;
			}
		}
		if(flag == true) 
		{
			return psave;
		}
		else 
		{
			return null;
		}
	} 
	
	@GetMapping("/searchproduct/{uid}")
	public List<Product> searchProduct(@PathVariable("uid") String artistId)
	{
		return pservice.searchProduct(artistId);
	}
}
