package com.example.demo.model;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="artist")
public class Artist {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int artistId;
	@Column
	private String firstName;
	@Column
	private String LastName;
	@Column
	private String contactNo;
	@Column
	private String emailId;
	@Column
	private String address;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")	//fk name
	private User loginId;

	@JsonIgnoreProperties("artist")
	@OneToMany(mappedBy = "artist",cascade = CascadeType.ALL)
	private Set<Product> plist;
	
	public Artist() {
		super();
	}

	
	public Artist(String firstName, String lastName, String contactNo, String emailId, String address, User loginId) {
		super();
		this.firstName = firstName;
		LastName = lastName;
		this.contactNo = contactNo;
		this.emailId = emailId;
		this.address = address;
		this.loginId = loginId;
	}

	

	public Artist(int artistId, String firstName, String lastName, String contactNo, String emailId, String address,
			User loginId, Set<Product> plist) {
		super();
		this.artistId = artistId;
		this.firstName = firstName;
		LastName = lastName;
		this.contactNo = contactNo;
		this.emailId = emailId;
		this.address = address;
		this.loginId = loginId;
		this.plist = plist;
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
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
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


	public Set<Product> getPlist() {
		return plist;
	}


	public void setPlist(Set<Product> plist) {
		for(Product p : plist) 
		{
			p.setArtist(this);
		}
		this.plist = plist;
	}
	
	
	
	
}
