package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.AddProduct;
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productrepo;
	
	
	public List<Product> getAll() 
	{
		return productrepo.findAll();
	}
	
//	public int addProduct(AddProduct addpro) 
//	{
//		// loginId
////		List<Object[]> loginId = productrepo.getLoginId(addpro.getLoginId());
//		
//		// artistId
//		List<Object[]> artistId = productrepo.getArtistId(addpro.getLoginId());
//		
//		System.out.println("Artist Id :- "+(int) artistId.get(0)[0]);
//		
//		// categoryId
//		List<Object[]> categotyId = productrepo.getcategortyId(addpro.getCategoryName());
//		System.out.println("Category Id :- "+(int) categotyId.get(0)[0]);
//		
//		return productrepo.addProduct(addpro.getProductName(), addpro.getProductDiscription(), addpro.getPrice(),(int) artistId.get(0)[0],(int) categotyId.get(0)[0]);
//	}
	
	//serach product's
	public List<Product> searchProduct(String artistId)
	{
		List<Object[]> loginId = productrepo.getLoginId(artistId);
		
		List<Object[]> artist= productrepo.getArtistId((int)loginId.get(0)[0]);
		
		return productrepo.getProductById((int)artist.get(0)[0]);
	}
	
	public Product getProduct(int pid)
	{
		return productrepo.findById(pid).get();
	}
	
	public Product save(Product p)
	{
		return productrepo.save(p);
	}
		
	
}
