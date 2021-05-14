package edu.ensit.pfa2.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import edu.ensit.pfa2.entity.UserRole;
import edu.ensit.pfa2.repository.RoleRep;


@Component
public class RoleService {
	@Autowired
	private RoleRep Rrepo;
	
	
	
	public Set<UserRole>getAll(){
		Iterable<UserRole> iterable =  Rrepo.findAll();
		Set<UserRole> roles=new HashSet<UserRole>();
		iterable.forEach(roles::add);
		return roles;
	}

}
