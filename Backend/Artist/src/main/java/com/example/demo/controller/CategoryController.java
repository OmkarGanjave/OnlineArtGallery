package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;

@RestController
public class CategoryController {
	@Autowired
	CategoryService categoryService;
	
	@GetMapping("/getCategory")
	public List<Category> getCategory() 
	{
		return categoryService.getCategory();
	}
	
}
