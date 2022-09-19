package com.example.demo.model;



public class AddProduct {
	

	private int loginId;
	
	private String categoryName;
	
	private String productName;
	
	private String productDiscription;

	private double price;
	

	public AddProduct() {
		super();
		// TODO Auto-generated constructor stub
	}


	public AddProduct(int loginId, String categoryName, String productName, String productDiscription, double price) {
		super();
		this.loginId = loginId;
		this.categoryName = categoryName;
		this.productName = productName;
		this.productDiscription = productDiscription;
		this.price = price;
	}


	public int getLoginId() {
		return loginId;
	}


	public void setLoginId(int loginId) {
		this.loginId = loginId;
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
