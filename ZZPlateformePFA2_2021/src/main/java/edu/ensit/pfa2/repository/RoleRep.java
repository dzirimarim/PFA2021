package edu.ensit.pfa2.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.ensit.pfa2.entity.RoleName;
import edu.ensit.pfa2.entity.Role;


@Repository
public interface RoleRep  extends CrudRepository<Role,Long>{
    Optional<Role> findByRoleName(RoleName roleName);

}
