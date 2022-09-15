package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository catrepo;
	
	public Category getCategory(int id)
	{
		return catrepo.findById(id).get();
	}
	
	public Category addCategory(Category category)
	{
		return catrepo.save(category);
	}
	
	public List<Category> getAll()
	{
		return catrepo.findAll();
	}

}
