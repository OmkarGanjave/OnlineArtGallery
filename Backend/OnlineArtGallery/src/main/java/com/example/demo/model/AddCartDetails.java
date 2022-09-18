package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class AddCartDetails {

	private String cartDetailsId;
	private String cartId;
	private String productId;
	public String getCartDetailsId() {
		return cartDetailsId;
	}
	public void setCartDetailsId(String cartDetailsId) {
		this.cartDetailsId = cartDetailsId;
	}
	public String getCartId() {
		return cartId;
	}
	public void setCartId(String cartId) {
		this.cartId = cartId;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	
	
}
