package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Artist;
import com.example.demo.model.Product;

@Service
public class AdminService {
	@Autowired
	private ProductService pserv;
	
	@Autowired
	private ArtistService artistService;
	
	public List<Product> allProducts()
	{
		List<Product> activeProducts = new ArrayList<Product>();
		
		List<Product> plist = pserv.getAll();
		
		for (Product product : plist) {
			if(product.getArtist().getLoginId().getStatus() == 1) 
			{
				activeProducts.add(product);
			}
		}
		
		return activeProducts;
	}
	
	
	public List<Artist> getActiveArtist()
	{
		List<Artist> activeArtist = new ArrayList<Artist>();
		
		// all artist
		List<Artist> artistlist = artistService.getAll();
		
		for (Artist artist : artistlist) 
		{
			if(artist.getLoginId().getStatus() == 1) 
			{
				activeArtist.add(artist);
			}
		}
		
		return activeArtist;
	}
}
