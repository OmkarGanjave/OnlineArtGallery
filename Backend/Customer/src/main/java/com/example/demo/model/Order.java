package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Order {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int orderId;
		@Column
		private int productQty;
		@Column
		private double totalPrice;
		
		
		
		public Order() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Order(int productQty, double totalPrice) {
			super();
			this.productQty = productQty;
			this.totalPrice = totalPrice;
		}
		
		public Order(int orderId, int productQty, double totalPrice) {
			super();
			this.orderId = orderId;
			this.productQty = productQty;
			this.totalPrice = totalPrice;
		}
		public int getOrderId() {
			return orderId;
		}
		public void setOrderId(int orderId) {
			this.orderId = orderId;
		}
		public int getProductQty() {
			return productQty;
		}
		public void setProductQty(int productQty) {
			this.productQty = productQty;
		}
		public double getTotalPrice() {
			return totalPrice;
		}
		public void setTotalPrice(double totalPrice) {
			this.totalPrice = totalPrice;
		}
		
		
}
