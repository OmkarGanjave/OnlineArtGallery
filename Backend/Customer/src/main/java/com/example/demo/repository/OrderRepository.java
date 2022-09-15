package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Order;
@Transactional
@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	@Query(value="select login_id from user where user_id = ?1", nativeQuery = true)
	public List<Object[]> getLoginId(String userID);
	
	@Query(value="select customer_id from customer where login_id_login_id = ?1", nativeQuery = true)
	public List<Object[]> getCustomerId(int loginId);
	
	@Query(value="select * from customer where customer_id = ?1", nativeQuery = true)
	public List<Order> getOrderById(int customerId);
	
	@Modifying
	@Query(value="insert into orders (customer_id,product_qty,total_price) values (?1,?2,?3)",nativeQuery = true)
	public int addOrder(int customerId,int productQty,double totalPrice);
	
}