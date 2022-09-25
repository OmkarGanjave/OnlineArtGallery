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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="cartDetails")
public class CartDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartDetailsId;
	
	@JsonIgnoreProperties("cart")
//	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cartId")
	private Cart cart;
	
//	@JsonIgnoreProperties("p")
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "productId")
	private Product product;

	public CartDetails() {
		super();
		// TODO Auto-generated constructor stub
		
	}


	public CartDetails(Cart cartId, Product productId) {
		super();
		this.cart = cart;
		this.product = productId;
		
	}

	public int getCartDetailsId() {
		return cartDetailsId;
	}

	public void setCartDetailsId(int cartDetailsId) {
		this.cartDetailsId = cartDetailsId;
	}

	

	@JsonIgnore
	public Cart getCart() {
		return cart;
	}

	
	public void setCart(Cart cart) {
		this.cart = cart;
	}

	
	public Product getProduct() {
		return product;
	}

	public void setProduct(Product productId) {
		this.product = productId;
	}




	

	

	

	
}
