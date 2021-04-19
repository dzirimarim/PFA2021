package edu.ensit.pfa2.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.Test;
@Repository
public interface TestRepo extends CrudRepository<Test, Long> {
	 Optional<Test> findById(Long id);
	    boolean existsById(Long id);

}
