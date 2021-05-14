package edu.ensit.pfa2.repository;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.Category;
import edu.ensit.pfa2.entity.Question;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@Repository
public interface CategoryRepo extends CrudRepository<Category, Long> {
	List<Category> findAll();
	Optional<Category> findById(Long id) ;
}
