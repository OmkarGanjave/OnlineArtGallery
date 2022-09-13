package com.example.demo.model;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name="category")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int categoryId;
	@Column
	private String categoryName;
	
	@JsonIgnoreProperties("category")
	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private Set<Product> p;
	
	public Category() {
		super();
	}

	
	public Category(int categoryId, String categoryName, Set<Product> p) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.p = p;
	}


	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public Set<Product> getP() {
		return p;
	}

	public void setP(Set<Product> p) {
		
		for(Product pro : p) 
		{
			pro.setCategory(this);
		}
		this.p = p;
	}
	
	
}
