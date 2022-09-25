package com.example.demo.model;



import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="cart")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	
	@OneToOne(cascade = CascadeType.DETACH)
	@JoinColumn(name="customer_id")
	private Customer customerID;
	
	
	@JsonIgnoreProperties("cartdetails")
	@OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
	private List<CartDetails> cartdetails;
	

	
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Cart( Customer customerID, List<CartDetails> cartdetails) {
		super();
		this.customerID = customerID;
		this.cartdetails = cartdetails;
		
	}
	
	public int getCartId() {
		return cartId;
	}
	
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	
	@JsonIgnore
	public Customer getCustomerID() {
		return customerID;
	}
	
	public void setCustomerID(Customer customerID) {
		this.customerID = customerID;
	}
	
	public List<CartDetails> getCartdetails() {
		return cartdetails;
	}
	
	public void setCartdetails(List<CartDetails> cartdetails) {
		// for loop
		this.cartdetails = cartdetails;
	}
	
	
	

	
		
	
	
	
	

}
