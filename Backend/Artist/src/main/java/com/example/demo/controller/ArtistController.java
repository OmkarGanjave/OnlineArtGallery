package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Artist;
import com.example.demo.service.ArtistService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ArtistController {
	
	@Autowired
	ArtistService artistrepo;
	
	@PostMapping("/reg")
	public Artist regArtist(@RequestBody Artist artist) 
	{
		return artistrepo.regArtist(artist);
	}
	
	@PostMapping("/login")
	public boolean loginArtist(@RequestParam("artistUserId") String artistUserId,@RequestParam("password") String password) 
	{
		return artistrepo.loginArtist(artistUserId, password);
	}
}
