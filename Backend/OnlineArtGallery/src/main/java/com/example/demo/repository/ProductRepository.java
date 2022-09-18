package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Product;
@Transactional
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	// loginId
	@Query(value="select login_id from user where user_id = ?1", nativeQuery = true)
	public List<Object[]> getLoginId(String userID);
	// artist_id
	@Query(value="select artist_id from artist where login_id = ?1", nativeQuery = true)
	public List<Object[]> getArtistId(int loginId);
	
	// category id
	@Query(value="select category_id from category where category_name = ?1",nativeQuery = true)
	public List<Object[]> getcategortyId(String categoryName);
	
	//	add product
	@Modifying
	@Query(value="insert into product (product_name,product_discription,price,artist_id,category_id) values(?1,?2,?3,?4,?5)",nativeQuery = true)
	public int addProduct(String productName,String productdesc,double price,int artistId, int categotyId);
	
	// search product
	@Query(value="select * from product where artist_id = ?1", nativeQuery = true)
	public List<Product> getProductById(int artistId);
	
	
	
	
}
