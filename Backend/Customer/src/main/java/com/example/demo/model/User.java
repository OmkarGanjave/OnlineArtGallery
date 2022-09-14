package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loginId;
	@Column
	private String userId;
	@Column
	private String role;
	@Column
	private int status;
	@Column
	private String password;
	
	public User() {
		super();
		this.status=1;
		// TODO Auto-generated constructor stub
	}

	public User(String userId, String role, String password) {
		super();
		this.userId = userId;
		this.role = role;
		this.password = password;
		this.status=1;
	}

	public User(int loginId, String userId, String role, String password) {
		super();
		this.loginId = loginId;
		this.userId = userId;
		this.role = role;
		this.status = 1;
		this.password = password;
	}



	public int getLoginId() {
		return loginId;
	}

	public void setLoginId(int loginId) {
		this.loginId = loginId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", role=" + role + ", status=" + status + ", password=" + password + "]";
	}
	
	
}
