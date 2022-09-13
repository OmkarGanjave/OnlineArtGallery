package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="user")
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loginid;
	@Column
	private String password;
	@Column
	private String role;
	@Column
	private int status;
	@Column(name="user_id")
	private String user_id;
	public Login() {
		super();
	}
	
	
	public Login(int loginid, String password, String role, int status, String user_id) {
		super();
		this.loginid = loginid;
		this.password = password;
		this.role = role;
		this.status = status;
		this.user_id = user_id;
	}


	public int getLoginid() {
		return loginid;
	}
	public void setLoginid(int loginid) {
		this.loginid = loginid;
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
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	
	
}
