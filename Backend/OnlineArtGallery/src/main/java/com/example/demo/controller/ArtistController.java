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

import com.example.demo.model.AddImage;
import com.example.demo.model.AddProduct;
import com.example.demo.model.Artist;
import com.example.demo.model.ArtistRegister;
import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.model.UDProduct;
import com.example.demo.model.UpdateProduct;
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
		
		Artist artistinfo = new Artist(artist.getFirstName(), artist.getLastName(), artist.getContactNo(),artist.getEmailId(), artist.getAddress(), artistUser);

		return artistservice.regArtist(artistinfo);
	}
	
	@GetMapping("/artistProduct")
	public List<Artist> getAll()
	{
		return artistservice.getAll();
	}
	
	@GetMapping("/profile/{loginId}")
	public Artist artistUser(@PathVariable("loginId") int loginId) 
	{
		return artistservice.getArtist(loginId);
	}
	
	
	//add product info
	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody AddProduct pro) 
	{
		System.out.println("login Id :- "+pro.getLoginId());
		
		Artist artist = artistservice.getArtist(pro.getLoginId());
		
		System.out.println(artist);
		
		Category category = catservice.getCategoryByName(pro.getCategoryName());
		
		System.out.println(category.getCategoryId());
		
		Product addProduct = new Product(artist, category, pro.getProductName(), pro.getProductDiscription(), pro.getPrice());
		
		// save product
		return productserv.save(addProduct);
	}
	
	
	// add product image
	@PostMapping(value="/addimage/{loginId}/{productId}" ,consumes = "multipart/form-data")
	public int addProductImage(@PathVariable("loginId") int loginId,@PathVariable("productId") int productId,@RequestBody MultipartFile file)
	{
		System.out.println("hi");
		
		Artist artist = artistservice.getArtist(loginId);
		
		System.out.println(artist);
		
//		Category category = catservice.getCategoryByName(pro.getCategoryName());
//		
//		System.out.println(category.getCategoryId());
//		
//		Product addProduct = new Product(artist, category, pro.getProductName(), pro.getProductDiscription(), pro.getPrice());
		
		Product addedProduct = productserv.getProduct(productId);
		
		System.out.println("Product Id :- "+addedProduct.getProductId()+"\tProduct Name :- "+addedProduct.getProductName());
		
		
		boolean flag = true;
		
		if(file.getSize() > 10 && !(file.getContentType().equals("jpg"))) 
		{
			
			try 
			{
				// save product
		//		productserv.save(addProduct);
				
				
				byte[] data = file.getBytes();
				
				Path path = Paths.get("C:/Users/omkar/OneDrive/Documents/OMKAR/C-DAC/March2022/Project/Online Art Gallary/ProjectOnlineArtGallery/onlineartgallary/src/images/"+artist.getArtistId()+"_"+addedProduct.getProductId()+".jpg");
				
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
	
	//Update Product
	//update only pname,pdesc,pprice
		@PostMapping("/updateproduct")
		public Product updateProduct(@RequestBody UpdateProduct uproduct )
		{
			Product product=productserv.getProduct(uproduct.getProductId());
			product.setProductName(uproduct.getProductName());
			product.setProductDiscription(uproduct.getProductDiscription());
			Category category=catservice.getCategoryByName(uproduct.getCategoryName());
			product.setCategory(category);
			product.setPrice(uproduct.getPrice());
			Product updatedproduct=productserv.save(product);
			return updatedproduct;
		}
	
	

}
