package com.example.demo.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	
	@JsonIgnoreProperties("plist")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="artistId")
	private Artist artist;
	
	@JsonIgnoreProperties("p")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "categoryId")
	private Category category;
	
	@Column
	private String productName;
	
	@Column
	private String productDiscription;
	
	@Column
	private double price;
	
	public Product() {
		super();
	}

	public Product( Artist artist, Category category, String productName, String productDiscription,
			double price) {
		super();
		this.artist = artist;
		this.category = category;
		this.productName = productName;
		this.productDiscription = productDiscription;
		this.price = price;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public Artist getArtist() {
		return artist;
	}

	public void setArtist(Artist artist) {
		this.artist = artist;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDiscription() {
		return productDiscription;
	}

	public void setProductDiscription(String productDiscription) {
		this.productDiscription = productDiscription;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	

	
	
}
