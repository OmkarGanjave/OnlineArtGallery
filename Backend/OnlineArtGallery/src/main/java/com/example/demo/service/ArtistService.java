package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Artist;
import com.example.demo.repository.ArtistRepository;



@Service
public class ArtistService {
	@Autowired
	private ArtistRepository artistrepo;
	
	public Artist regArtist(Artist artist) 
	{
		return artistrepo.save(artist);
	}
	
	public List<Artist> getAll()
	{
		return artistrepo.findAll();
	}
	
	public Artist getArtistById(int artistId) 
	{
		return artistrepo.findById(artistId).get();
	}
	
	public Artist getArtist(int loginId) 
	{
		return artistrepo.getArtist(loginId);
	}
	
	//save artist
	public Artist saveArtist(Artist artist) 
	{
		return artistrepo.save(artist);
	}
}
