package edu.ensit.pfa2.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.PropositionReponse;


import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@Repository
public interface PropositionReponseRepo extends CrudRepository<PropositionReponse,Long>{

}
