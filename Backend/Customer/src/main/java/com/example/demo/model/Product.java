



package com.example.demo.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
	private String productDiscription ;
	@Column
	private String productImage;
	@Column
	private double price;
	
	@JsonIgnoreProperties("products")
	@ManyToOne//(cascade=CascadeType.ALL)
	@JoinColumn(name="categoryId")
	Category category;

	@ManyToMany(cascade = {CascadeType.MERGE,CascadeType.PERSIST})
	@JoinTable(name="order_product",
				joinColumns = @JoinColumn(name="product_id"),
				inverseJoinColumns = @JoinColumn(name="order_id"))
	
	Set<Order > order; 
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product( String productName, String productDiscription, String productImage, double price,Category category) {
		super();
		this.productName = productName;
		this.productDiscription =productDiscription;
		this.productImage = productImage;
		this.price = price;
		this.category = category;
	}
	
	public Product(String productName, String productDiscription, String productImage, double price, Set<Order> order) {
		super();
		this.productName = productName;
		this.productDiscription = productDiscription;
		this.productImage = productImage;
		this.price = price;
		this.order = order;
	}
	

	public Product(int productId) {
		super();
		this.productId = productId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	
	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
	
	public String getProductDiscription() {
		return productDiscription;
	}

	public void setProductDiscription(String productDiscription) {
		this.productDiscription = productDiscription;
	}

	public Set<Order> getOrder() {
		return order;
	}

	public void setOrder(Set<Order> order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productDiscription="
				+ productDiscription+ ", productImage=" + productImage + ", price=" + price + ", category=" + category
				+ "]";
	}

}
