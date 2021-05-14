package edu.ensit.pfa2.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.RoleName;
import edu.ensit.pfa2.entity.UserRole;


import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@Repository
public interface RoleRep  extends CrudRepository<UserRole,Long>{
    Optional<UserRole> findByRoleName(RoleName roleName);

}
