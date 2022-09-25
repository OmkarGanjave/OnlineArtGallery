package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.CartDetails;
@Transactional
@Repository
public interface CartDetailsRepository extends JpaRepository<CartDetails, Integer> {
 @Modifying
 @Query(value="delete from cart_details where product_id=?1",nativeQuery = true)
 public int removeProductFromCart(int pid);
	
}
