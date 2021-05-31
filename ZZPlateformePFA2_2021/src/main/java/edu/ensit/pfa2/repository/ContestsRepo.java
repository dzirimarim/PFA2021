package edu.ensit.pfa2.repository;

import edu.ensit.pfa2.entity.algo.Contest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContestsRepo extends CrudRepository<Contest, Long> {
    Optional<Contest> findByCode(String code);
}
