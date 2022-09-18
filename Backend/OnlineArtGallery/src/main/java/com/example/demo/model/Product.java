package com.example.demo.model;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;

	@Column
	private String productName;
	
	@Column
	private String productDiscription;
	
	@Column
	private double price;
	
	@JsonIgnoreProperties("product")
	@OneToMany(mappedBy = "productId", cascade = CascadeType.ALL)
	private Set<CartDetails> p;
	
	@JsonIgnoreProperties("products")//@JsonIgnoreProperties("products")   -----in customer product
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "categoryId")
	private Category category;
	
	@JsonIgnoreProperties("plist")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="artistId")
	private Artist artist;
	
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
	public Product(int productId, Set<CartDetails> p, String productName, String productDiscription, double price,
			Category category) {
		super();
		this.productId = productId;
		this.p = p;
		this.productName = productName;
		this.productDiscription = productDiscription;
		this.price = price;
		this.category = category;
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

	
	public Set<CartDetails> getP() {
		return p;
	}

	public void setP(Set<CartDetails> p) {
		for(CartDetails product : p)
		{
			product.setProductId(this);
		}
		this.p = p;
	}
	
	
}
