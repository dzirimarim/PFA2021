package edu.ensit.pfa2.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.Category;
@Repository
public interface CategoryRepo extends CrudRepository<Category, Long> {

}
