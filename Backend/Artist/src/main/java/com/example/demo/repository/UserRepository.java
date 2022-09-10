package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

//	@Query("select u.role, u.loginID from user as u where user_id = :uid and password = :pwd")
//	public List<Object[]> checkLogin(String uid,String pwd);
}
