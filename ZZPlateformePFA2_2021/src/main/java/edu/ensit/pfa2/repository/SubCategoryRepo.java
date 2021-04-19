package edu.ensit.pfa2.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.SubCategory;

@Repository
public interface SubCategoryRepo extends CrudRepository<SubCategory, Long> {

}
