package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="artist")
public class Artist {
	
	@Id
	private String artistUserId;
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
	@Column
	private String password;
	@Column
	private String role;
	
	public Artist() {
		super();
	}

	public Artist(String artistUserId, String firstName, String lastName, String emailId, String contactNo,
			String address, String password, String role) {
		super();
		this.artistUserId = artistUserId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.contactNo = contactNo;
		this.address = address;
		this.password = password;
		this.role = role;
	}

	public String getArtistUserId() {
		return artistUserId;
	}

	public void setArtistUserId(String artistUserId) {
		this.artistUserId = artistUserId;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
}
