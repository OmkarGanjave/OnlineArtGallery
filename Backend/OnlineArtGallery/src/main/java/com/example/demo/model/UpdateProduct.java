package com.example.demo.model;

import javax.persistence.Column;

public class UpdateProduct {
	
	private int productId;
	
	private int artistId;
	
	private String categoryName;
	
	private String productName;
	
	private String productDiscription;
	
	private double price;

	public UpdateProduct() {
		super();
	}

	public UpdateProduct(int productId, int artistId, String categoryName, String productName,
			String productDiscription, double price) {
		super();
		this.productId = productId;
		this.artistId = artistId;
		this.categoryName = categoryName;
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

	public int getArtistId() {
		return artistId;
	}

	public void setArtistId(int artistId) {
		this.artistId = artistId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
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
