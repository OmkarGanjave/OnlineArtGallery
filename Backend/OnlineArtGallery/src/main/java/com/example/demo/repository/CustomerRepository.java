package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Artist;
import com.example.demo.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer> {

	@Query(value="select * from customer where login_id = ?1", nativeQuery = true)
	public Customer getCustomer(int loginId);
}
