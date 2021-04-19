package edu.ensit.pfa2.repository;

import org.springframework.data.repository.CrudRepository;

import edu.ensit.pfa2.entity.Submission;

public interface SubmissionRepo extends CrudRepository<Submission, Long>{
	
}
