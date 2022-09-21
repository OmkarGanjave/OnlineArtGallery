package com.example.demo.model;

import org.springframework.web.multipart.MultipartFile;

public class AddImage {

	private int loginId;
	
	private int productId;
	
	private MultipartFile file;

	public AddImage() {
		super();
	}

	public AddImage(int loginId, int productId, MultipartFile file) {
		super();
		this.loginId = loginId;
		this.productId = productId;
		this.file = file;
	}

	public int getLoginId() {
		return loginId;
	}

	public void setLoginId(int loginId) {
		this.loginId = loginId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}
	
	
}
