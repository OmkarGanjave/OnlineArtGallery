package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
//	@Query("select u.role, u.loginid from user u where u.user_id = :uid and u.password = :pwd ")
//	public List<Object[]> checkLogin(String uid,String pwd);
}
