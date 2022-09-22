package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.UDProductRepository;

@Service
public class UDProductService {
	
	@Autowired
	UDProductRepository urepo;
	
	
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
	
	//delete
	//delete product
		public int deleteProduct(int productId,int status)
		{
			boolean flag=false;
			int res = 0;
			try {
				res = urepo.deleteByproductId(productId,status);
			}
			catch(Exception e)
			{
				flag=false;
			}
			if(res == 1) 
			{
				flag = true;
			}
			else {
				flag = false;
			}
			return res;
		}
}
