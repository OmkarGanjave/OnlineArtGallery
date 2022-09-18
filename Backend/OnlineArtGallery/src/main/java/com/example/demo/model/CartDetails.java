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
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="cartDetails")
public class CartDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartDetailsId;
	
	@JsonIgnoreProperties("c")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cartId")
	private Cart cartId;
	
	@JsonIgnoreProperties("p")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "productId")
	private Product productId;

	public CartDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CartDetails(int cartDetailsId, Cart cartId, Product productId) {
		super();
		this.cartDetailsId = cartDetailsId;
		this.cartId = cartId;
		this.productId = productId;
		
	}

	
	public CartDetails(Cart cartId, Product productId) {
		super();
		this.cartId = cartId;
		this.productId = productId;
	}

	public int getCartDetailsId() {
		return cartDetailsId;
	}

	public void setCartDetailsId(int cartDetailsId) {
		this.cartDetailsId = cartDetailsId;
	}

	public Cart getCartId() {
		return cartId;
	}

	public void setCartId(Cart cartId) {
		this.cartId = cartId;
	}

	public Product getProductId() {
		return productId;
	}

	public void setProductId(Product productId) {
		this.productId = productId;
	}

	@Override
	public String toString() {
		return "CartDetails [cartDetailsId=" + cartDetailsId + ", cartId=" + cartId + ", productId=" + productId + "]";
	}

	

	

	
}
