package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query(value="select * from user where user_id = ?1 and password = ?2", nativeQuery = true)
	public Login findByUid(String uid,String pwd);
}
