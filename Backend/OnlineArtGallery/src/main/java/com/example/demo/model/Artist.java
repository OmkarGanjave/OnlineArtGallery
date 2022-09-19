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
	@Column
	private double rating;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")	//fk name
	private User loginId;

	@JsonIgnoreProperties("artist")
	@OneToMany(mappedBy = "artist",cascade = CascadeType.ALL)
	private Set<Product> plist;
	
	public Artist() {
		super();
		this.rating=0;
	}

	
	public Artist(String firstName, String lastName, String contactNo, String emailId, String address, User loginId) {
		super();
		this.firstName = firstName;
		LastName = lastName;
		this.contactNo = contactNo;
		this.emailId = emailId;
		this.address = address;
		this.loginId = loginId;
		this.rating=0;
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
		this.rating=0;
	}


	public int getArtistId() {
		return artistId;
	}

	public double getRating() {
		return rating;
	}


	public void setRating(double rating) {
		this.rating = rating;
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


	@Override
	public String toString() {
		return "Artist [artistId=" + artistId + ", firstName=" + firstName + ", LastName=" + LastName + ", contactNo="
				+ contactNo + ", emailId=" + emailId + ", address=" + address + ", rating=" + rating + ", loginId="
				+ loginId + ", plist=" + plist + "]";
	}
	
	
	
	
}
