package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="product")
public class UDProduct {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	@Column
	private int artistId;
	@Column
	private int categoryId;
	@Column
	private String productName;
	@Column
	private String productDesc;
	@Column
	private double price;
	public UDProduct() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UDProduct(int pid, int artistId, int categoryId, String productName, String productDesc, double price) {
		super();
		this.pid = pid;
		this.artistId = artistId;
		this.categoryId = categoryId;
		this.productName = productName;
		this.productDesc = productDesc;
		this.price = price;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public int getArtistId() {
		return artistId;
	}
	public void setArtistId(int artistId) {
		this.artistId = artistId;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	
	
	
}
