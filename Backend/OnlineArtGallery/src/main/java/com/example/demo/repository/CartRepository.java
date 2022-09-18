package com.example.demo.repository;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cart;

@Transactional
@Repository
public interface CartRepository extends JpaRepository<Cart,Integer>{

	@Modifying
	@Query(value="select login_id from user where user_id = ?1", nativeQuery=true )
	public List<Object[]> getUid(String customerId);
	
	@Modifying
	@Query(value="select customer_id from customer where login_id = ?1", nativeQuery=true )
	public List<Object[]> customerId(int loginId);
	
	@Modifying
	@Query(value="insert  into cart (customer_id) values(?1)",nativeQuery=true)
	public int addToCart(int customerid);
	
	@Query(value="select cart_id from cart where customer_id=?1",nativeQuery = true)
	public int getCartId(int customerId);

	
}
