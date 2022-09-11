package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loginid;
	@Column
	private String userId;
	@Column
	private String password;
	@Column
	private String role;
	@Column
	private  int  status;
	public User() {
		super();
	}
	public User(String userId, String password, String role, int status) {
		super();
		this.userId = userId;
		this.password = password;
		this.role = role;
		this.status = 1;
	}
	public int getLoginid() {
		return loginid;
	}
	public void setLoginid(int loginid) {
		this.loginid = loginid;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
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
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	
}
