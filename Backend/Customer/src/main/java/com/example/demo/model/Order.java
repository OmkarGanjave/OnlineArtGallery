package com.example.demo.model;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	//@Column
	//private int customerId;
	@Column
	private int productQty;
	@Column
	private double totalPrice;
	
		@JsonIgnoreProperties("order")
		@ManyToOne (cascade = CascadeType.ALL,fetch = FetchType.LAZY)
		@JoinColumn(name="customerId",updatable = false)
		Customer customer;
	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}	
	
	public Order(int productQty, double totalPrice, Customer customer) {
		super();
		this.productQty = productQty;
		this.totalPrice = totalPrice;
		this.customer = customer;
	}
	
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getProductQty() {
		return productQty;
	}
	public void setProductQty(int productQty) {
		this.productQty = productQty;
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
	
	
	
}
