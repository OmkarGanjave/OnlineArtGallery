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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customerId;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column 
	private String emailId;
	@Column 
	private String contactNo;
	@Column
	private String address;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
	User loginId;
	
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "customerID")
	private Cart cart;
	
	@JsonIgnoreProperties("customer")
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	//@Column - not associated
	List<Order> order;
	
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

//	public Customer(int customerId, String firstName, String lastName, String emailId, String contactNo, String address,
//			User loginId, Set<Order> order) {
//		super();
//		this.customerId = customerId;
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.emailId = emailId;
//		this.contactNo = contactNo;
//		this.address = address;
//		this.loginId = loginId;
//		this.order = order;
//	}
	
	
	


//	public Customer(String firstName, String lastName, String emailId, String contactNo, String address, User loginId,
//			Set<Order> order) {
//		super();
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.emailId = emailId;
//		this.contactNo = contactNo;
//		this.address = address;
//		this.loginId = loginId;
//		this.order = order;
//	}

	


	public Customer(String firstName, String lastName, String emailId, String contactNo, String address, User loginId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.contactNo = contactNo;
		this.address = address;
		this.loginId = loginId;
	}

	@JsonIgnore
	public int getCustomerId() {
		return customerId;
	}



	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}



	public Customer(int customerId) {
		super();
		this.customerId = customerId;
	}

	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	public List<Order> getOrder() {
		return order;
	}



	public void setOrder(List<Order> order) {
		this.order = order;
	}



	public Cart getCart() {
		return cart;
	}



	public void setCart(Cart cart) {
		this.cart = cart;
	}

	

}
