package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="artist")
public class Artist {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int artistId;
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
	@JoinColumn(name="loginId")	//fk name
	private User loginId;
	
	public Artist() {
		super();
	}
	public Artist(String firstName, String lastName, String emailId, String contactNo, String address, User loginId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.contactNo = contactNo;
		this.address = address;
		this.loginId = loginId;
	}
	public int getArtistId() {
		return artistId;
	}
	public void setArtistId(int artistId) {
		this.artistId = artistId;
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
	public User getLoginId() {
		return loginId;
	}
	public void setLoginId(User loginId) {
		this.loginId = loginId;
	}
	
	
	
	
	
}
