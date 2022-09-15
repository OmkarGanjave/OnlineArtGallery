package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.UDProduct;

@Transactional
@Repository
public interface UDProductRepository extends JpaRepository<UDProduct,Integer> {

	@Modifying
	@Query(value="update product set price=?1 where pid =?2",nativeQuery = true)
	public int updatePrice(double price,int productId); 
	
	@Modifying
	@Query(value="update product set category_id=?1 where pid =?2",nativeQuery = true)
	public int updateCategory(int categoryId,int productId); 
	
	@Modifying
	@Query(value="update product set product_name=?1 where pid =?2",nativeQuery = true)
	public int updateProductName(String productName,int productId); 
	
	@Modifying
	@Query(value="update product set product_desc=?1 where pid =?2",nativeQuery = true)
	public int updateproductDesc(String productDesc,int productId); 
	
}
