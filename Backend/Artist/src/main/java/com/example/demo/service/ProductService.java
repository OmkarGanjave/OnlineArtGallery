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
	private ProductRepository prepo;
	
	
	public List<Product> getAll() 
	{
		return prepo.findAll();
	}
	
	public int addProduct(AddProduct addproduct) 
	{
		return 0;
	}
	
	public List<Product> searchProduct(String artistId)
	{
		List<Object[]> loginId = prepo.getLoginId(artistId);
		
		List<Object[]> artist= prepo.getArtistId((int)loginId.get(0)[0]);
		
		return prepo.getProductById((int)artist.get(0)[0]);
	}
	
	//delete product
	public boolean deleteProduct(int productId)
	{
		boolean flag=true;
		try {
		prepo.deleteById(productId); 
		}
		catch(Exception e)
		{
			flag=false;
		}
		return flag;
	}	
		
	
}
