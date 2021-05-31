package edu.ensit.pfa2.repository;

import edu.ensit.pfa2.entity.Category;
import edu.ensit.pfa2.entity.algo.Problem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemsRepo extends CrudRepository<Problem, Long>{
}
