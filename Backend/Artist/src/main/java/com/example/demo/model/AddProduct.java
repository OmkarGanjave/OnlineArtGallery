package com.example.demo.model;



public class AddProduct {
	

	private String artistId;
	

	private String categoryName;
	

	private String productName;
	
	private String productDiscription;

	private double price;
	

	public AddProduct() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AddProduct(String artistId, String categoryName, String productName, String productDiscription,
			double price) {
		super();
		this.artistId = artistId;
		this.categoryName = categoryName;
		this.productName = productName;
		this.productDiscription = productDiscription;
		this.price = price;
	}

	public String getArtistId() {
		return artistId;
	}

	public void setArtistId(String artistId) {
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
