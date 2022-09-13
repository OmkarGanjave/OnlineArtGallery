package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	@Query(value="select loginid from user where user_id = ?1", nativeQuery = true)
	public List<Object[]> getLoginId(String userID);
	
	@Query(value="select artist_id from artist where login_id = ?1", nativeQuery = true)
	public List<Object[]> getArtistId(int loginId);
	
	@Query(value="select * from artgallary.product where artist_id = ?1", nativeQuery = true)
	public List<Product> getProductById(int artistId);
}
