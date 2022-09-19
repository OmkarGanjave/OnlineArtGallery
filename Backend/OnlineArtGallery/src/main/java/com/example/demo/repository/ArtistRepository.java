package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Artist;
@Transactional
@Repository
public interface ArtistRepository extends JpaRepository<Artist,Integer> {

	@Query(value="select * from artist where login_id = ?1", nativeQuery = true)
	public Artist getArtist(int loginId);
	
}
