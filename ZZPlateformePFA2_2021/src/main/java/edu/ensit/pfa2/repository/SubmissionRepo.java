package edu.ensit.pfa2.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.Submission;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@Repository
public interface SubmissionRepo extends CrudRepository<Submission, Long>{
	
}
