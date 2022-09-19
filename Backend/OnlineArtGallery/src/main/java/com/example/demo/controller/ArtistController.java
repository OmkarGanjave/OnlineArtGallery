package com.example.demo.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.AddProduct;
import com.example.demo.model.Artist;
import com.example.demo.model.ArtistRegister;
import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.service.ArtistService;
import com.example.demo.service.CategoryService;
import com.example.demo.service.ProductService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ArtistController {
	@Autowired
	private ArtistService artistservice;
	
	@Autowired
	private UserService userservice;

	@Autowired
	private CategoryService catservice;
	
	@Autowired
	private ProductService productserv;
	
	@PostMapping("/reg")
	public Artist regArtist(@RequestBody ArtistRegister artist) 
	{
		
		User artistUser = new User(artist.getUserId(), artist.getRole(), artist.getPassword());
		
		userservice.add(artistUser);
		
		Artist artistinfo = new Artist(artist.getFirstName(), artist.getLastName(), artist.getEmailId(), artist.getContactNo(), artist.getAddress(), artistUser);

		return artistservice.regArtist(artistinfo);
	}
	
	@GetMapping("/artistProduct")
	public List<Artist> getAll()
	{
		return artistservice.getAll();
	}
	
	// add product
	@PostMapping("/addproduct")
	public int addProduct(@RequestPart("product") AddProduct pro,@RequestPart("file") MultipartFile file)
	{
		Artist artist = artistservice.getArtist(pro.getLoginId());
		
		//System.out.println(artist);
		
		Category category = catservice.getCategoryByName(pro.getCategoryName());
		
//		System.out.println(category.getCategoryId());
		
		Product addProduct = new Product(artist, category, pro.getProductName(), pro.getProductDiscription(), pro.getPrice());
		
		boolean flag = true;
		
		if(file.getSize() > 10 && !(file.getContentType().equals("jpg"))) 
		{
			
			try 
			{
				// save product
				productserv.save(addProduct);
				
				
				byte[] data = file.getBytes();
				
				Path path = Paths.get("images//"+artist.getArtistId()+"_"+addProduct.getProductId()+".jpg");
				
				Files.write(path, data);
			
			
			
			}
			catch (Exception e) {
			
				flag = false;
			}
		}
		if(flag == true)
		{
			
//			int psave = pservice.addProduct(pro);
//			return psave;
			return 1;
		}
		else 
		{
			return 0;
		}
	}

}
