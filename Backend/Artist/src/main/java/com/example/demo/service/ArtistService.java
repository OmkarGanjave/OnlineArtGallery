package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Artist;
import com.example.demo.repository.ArtistRepository;

@Service
public class ArtistService {
	@Autowired
	ArtistRepository artistservice;
	
	public Artist regArtist(Artist artist) 
	{
		return artistservice.save(artist);
	}
	
	public boolean loginArtist(String artistUserId,String password) 
	{
		boolean flag = false;
		List<Artist> artistList = artistservice.findAll();
		
		for(Artist art : artistList) 
		{
			if(artistUserId.equals(art.getArtistUserId()) && password.equals(art.getPassword())) 
			{
				System.out.println(art.getArtistUserId()+" "+art.getPassword());
				flag = true;
				break;
			}
			
		}
		
		return flag;
	}
}
