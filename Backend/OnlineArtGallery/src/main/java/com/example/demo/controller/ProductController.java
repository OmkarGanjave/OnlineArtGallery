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
import com.example.demo.model.Artist;
import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.service.ArtistService;
import com.example.demo.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductService pservice;
	
	@Autowired
	private ArtistService artistserv;

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
	// upload product info
//	@PostMapping("/addproduct")
//	public int addProduct(@RequestParam("product") AddProduct pro,@RequestParam("file") MultipartFile file) 
//	{
//		
//		System.out.println("login id - "+pro.getLoginId());
//		
//		// artist
//		Artist artist =  artistserv.getArtistById(pro.getLoginId());
//		
//		System.out.println("Artist Name = "+artist.getFirstName());
//		
//		System.out.println("Artist Name = "+artist.getLastName());
//		
//		System.out.println("Category anme = "+pro.getCategoryName());
//		
//		boolean flag = true;
//		
//		if(file.getSize() > 10 && !(file.getContentType().equals("jpg"))) 
//		{
//			try {
//			byte[] data = file.getBytes();
//			
//			Path path = Paths.get("images//"+artist.getArtistId()+"_1.jpg");
//			
//			Files.write(path, data);
//			}
//			catch (Exception e) {
//			
//				flag = false;
//			}
//		}
//		if(flag == true)
//		{
//			int psave = pservice.addProduct(pro);
//			return psave;
//		}
//		else 
//		{
//			return 0;
//		}
//		
//	} 
	
	// upload product image
//	@PostMapping("/addImage")
//	public boolean addImage(@RequestParam("file") MultipartFile file) 
//	{
//		boolean flag = true;
//		
//		if(file.getSize() > 10 && !(file.getContentType().equals("jpg"))) 
//		{
//			try
//			{
//				byte[] data = file.getBytes();
//				
//				Path path = Paths.get("images//"+"1_1.jpg");
//				
//				Files.write(path, data);
//			}
//			catch (Exception e) {
//			
//				flag = false;
//			}
//		}
//		
//		return flag;
//	}
//	
	
	@GetMapping("/searchproduct/{uid}")
	public List<Product> searchProduct(@PathVariable("uid") String artistId)
	{
		return pservice.searchProduct(artistId);
	}
	
	
	

}
