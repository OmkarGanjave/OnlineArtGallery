package com.example.demo.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@RestController
public class CategoryController {

	@Autowired
	CategoryService cs;
	
	@GetMapping("/getCategory/{categoryId}")
	public Category getCategory(@PathVariable  int categoryId)
	{
		return cs.getCategory(categoryId);
	}
	
	@GetMapping("/getcategories")
	public List<Category> getAll()
	{
		return cs.getAll();
	}
	
	@PostMapping("/addcategory")
	public Category addCategory(@RequestBody Category category)
	{
		return cs.addCategory(category);
	}
}
