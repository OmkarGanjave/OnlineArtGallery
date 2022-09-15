



package com.example.demo.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	
	@JsonIgnoreProperties("product")
	@OneToMany(mappedBy = "productId", cascade = CascadeType.ALL)
	private Set<CartDetails> p;
	
	@Column
	private String productName;
	@Column
	private String productDiscription;
	
	@Column
	private double price;
	
	@JsonIgnoreProperties("products")
	@ManyToOne//(cascade=CascadeType.ALL)
	@JoinColumn(name="categoryId")
	Category category;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", p=" + p + ", productName=" + productName + ", productDiscription="
				+ productDiscription + ", price=" + price + ", category=" + category + "]";
	}



}
