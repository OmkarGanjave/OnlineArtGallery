package com.example.demo.model;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	
	@Column
	private double totalPrice;
	
		@JsonIgnoreProperties("order")
		@ManyToOne (cascade = CascadeType.ALL,fetch = FetchType.LAZY)
		@JoinColumn(name="customerId",updatable = false)
		Customer customer;
	
//	@ManyToMany(cascade = {CascadeType.MERGE,CascadeType.PERSIST})
//	@JoinTable(name="order_product",
//				joinColumns = @JoinColumn(name="order_id"),
//				inverseJoinColumns = @JoinColumn(name="product_id"))
//	
//	Set<Product > product;
	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}	
	
	public Order(double totalPrice, Customer customer) {
		super();
		
		this.totalPrice = totalPrice;
		this.customer = customer;
	}
	
	
	
//	public Order(int productQty, double totalPrice, Set<Product> product) {
//		super();
//		
//		this.totalPrice = totalPrice;
//		this.product = product;
//	}
//	

	public Order(int orderId) {
		super();
		this.orderId = orderId;
	}

	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

//	public Set<Product> getProduct() {
//		return product;
//	}
//
//	public void setProduct(Set<Product> product) {
//		this.product = product;
//	}
	
	
	
}
