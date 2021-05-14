package edu.ensit.pfa2.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.Question;
import edu.ensit.pfa2.entity.SubCategory;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@Repository
public interface QuestionRepo extends CrudRepository<Question, Long> {
	List<Question> findAll();
	List<Question> findAllByLevel(int level);
	List<Question> findAllByLevelAndSubCategory(int level, SubCategory subCategory);
    Boolean existsByLevelAndSubCategory(int level, SubCategory subCategory);
    Optional<Question> findById(Long id) ;
    

}
