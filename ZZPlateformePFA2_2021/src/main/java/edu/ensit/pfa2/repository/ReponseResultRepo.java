package edu.ensit.pfa2.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.ReponseResult;
import edu.ensit.pfa2.entity.UserEnt;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@Repository
public interface ReponseResultRepo extends CrudRepository<ReponseResult,Long>{
	List<ReponseResult> findAllByCandidat(UserEnt candidat);
}
