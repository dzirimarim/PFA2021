package edu.ensit.pfa2.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.UserEnt;


import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@Repository
public interface UserE extends CrudRepository<UserEnt, Long> {
	UserEnt findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
