package edu.ensit.pfa2.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.Candidat;
import edu.ensit.pfa2.entity.CandidatTest;
import edu.ensit.pfa2.entity.SubCategory;
import edu.ensit.pfa2.entity.Test;
import edu.ensit.pfa2.entity.UserEnt;


@Repository
public interface CandidatTestRepo   extends CrudRepository<CandidatTest,Long>{
	boolean existsByCandidateAndNxT(Candidat candidat ,Test test);
	boolean existsByCandidateAndSubCategory(Candidat candidat,SubCategory subCategory);
	boolean existsByCandidateAndContestId(Candidat candidat,long contestId);
	Optional<CandidatTest> findByCandidatAndContestId(Candidat candidat,long contestId);
}
