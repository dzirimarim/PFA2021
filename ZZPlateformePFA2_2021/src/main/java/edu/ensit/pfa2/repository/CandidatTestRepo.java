package edu.ensit.pfa2.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.Candidat;
import edu.ensit.pfa2.entity.CandidatTest;
import edu.ensit.pfa2.entity.SubCategory;
import edu.ensit.pfa2.entity.Test;
import edu.ensit.pfa2.entity.UserEnt;


import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@Repository
public interface CandidatTestRepo extends CrudRepository<CandidatTest,Long>{
	boolean existsByCandidatAndTest(Candidat candidat ,Test test);
	boolean existsByCandidatAndSubCategory(Candidat candidat,SubCategory subCategory);
	boolean existsByCandidatAndContestId(Candidat candidat,long contestId);
	Optional<CandidatTest> findByCandidatAndContestId(Candidat candidat,long contestId);
}
