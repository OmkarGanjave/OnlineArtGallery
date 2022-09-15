package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.UDProductRepository;

@Service
public class UDProductService {
	
	@Autowired
	UDProductRepository urepo;
	
	public boolean deleteProduct(int productId)
	{
		boolean flag=true;
		try {
		urepo.deleteById(productId); 
		}
		catch(Exception e)
		{
			flag=false;
		}
		return flag;
	}
	
	public int updatePrice(double price,int productId)
	{
		return urepo.updatePrice(price, productId);
	}
	
	public int updateCategory(int categoryId,int productId)
	{
		return urepo.updateCategory(categoryId, productId);
	}
	
	public int updateProductName(String productName,int productId)
	{
		return urepo.updateProductName(productName,productId);
	}
	public int updateproductDesc(String productDesc,int productId)
	{
	return urepo.updateproductDesc(productDesc, productId);	
	}
}
