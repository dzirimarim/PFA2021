package edu.ensit.pfa2.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.Candidat;
import edu.ensit.pfa2.entity.UserEnt;


@Repository
public interface CandidatRepo extends CrudRepository<Candidat,Long> {
	boolean existsByUsername(String username);
    Optional<UserEnt> findByUsername(String username);

}