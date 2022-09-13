package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Artist;
import com.example.demo.model.ArtistRegister;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.service.ArtistService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ArtistController {
	@Autowired
	private ArtistService artistservice;
	
	@Autowired
	private UserService userservice;
	
	@PostMapping("/reg")
	public Artist regArtist(@RequestBody ArtistRegister artist) 
	{
		
		User artistUser = new User(artist.getUserId(), artist.getPassword(), artist.getRole(),artist.getStatus());
		
		userservice.add(artistUser);
		
		Artist artistinfo = new Artist(artist.getFirstName(), artist.getLastName(), artist.getEmailId(), artist.getContactNo(), artist.getAddress(), artistUser);

		return artistservice.regArtist(artistinfo);
	}
	
	@GetMapping("/artistProduct")
	public List<Artist> getAll()
	{
		return artistservice.getAll();
	}
	

}
