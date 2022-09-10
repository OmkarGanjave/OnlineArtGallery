package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Artist;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Integer> {

}
