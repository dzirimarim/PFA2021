package edu.ensit.pfa2.repository;

import edu.ensit.pfa2.entity.algo.ProblemSubmition;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemSubmitionRepo extends CrudRepository<ProblemSubmition, Long> {
}
