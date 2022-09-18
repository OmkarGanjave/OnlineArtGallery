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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="cart")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customer_id")
	private Customer customerID;
	
	
	@JsonIgnoreProperties("cart")
	@OneToMany(mappedBy = "cartId", cascade = CascadeType.ALL)
	private Set<CartDetails> c;
	

	
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cart(int cartId, Customer customerID, Set<CartDetails> c) {
		super();
		this.cartId=cartId;
		this.customerID = customerID;
		this.c = c;
		
	}
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public Customer getCustomerID() {
		return customerID;
	}
	public void setCustomerID(Customer customerID) {
		this.customerID = customerID;
	}
	public Set<CartDetails> getC() {
		return c;
	}
	public void setC(Set<CartDetails> c) {
		for(CartDetails cart : c) 
		{
			cart.setCartId(this);
		}
		this.c = c;
	}
	

	
		
	
	
	
	

}
