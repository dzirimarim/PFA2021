package edu.ensit.pfa2.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import edu.ensit.pfa2.entity.Candidat;
import edu.ensit.pfa2.entity.UserEnt;
import edu.ensit.pfa2.reponse.MessageValidation;
import edu.ensit.pfa2.repository.RoleRep;
import edu.ensit.pfa2.repository.UserE;


@Component
public class UserService {
	@Autowired
	UserE URepo;
	@Autowired
	RoleRep roleRep;
	@Autowired
	CandidatService candidatService;
	public Object editUser( UserEnt user) {

		if (user.getId() == null || !URepo.existsById(user.getId()))
			return new MessageValidation("id null or user not found with id ===> "+ user.getId());
		try {
			UserEnt userInstance=URepo.findById(user.getId()).orElse(null);
			user.setPassword(userInstance.getPassword());
			UserEnt userEntity=null;
			if(URepo.existsByUsername(user.getUsername())){
			userEntity = URepo.findByUsername(user.getUsername())/*.orElse(null)*/;
			 if(userEntity.getId()!=user.getId()) 
				 return new MessageValidation("you have change username with existing user name please try again: user id ===> "+ user.getId() +"this username is associeted to "+userEntity.getId());
			}
					
			
		} catch (Exception e) {
			e.printStackTrace();
		}

		return URepo.save(user);
	}
	public Object editCandidate(Candidat user) {
		return candidatService.editCandidate(user);
	}
	public Object remove(Long id) {
		UserEnt userToRemove=URepo.findById(id).orElse(null);
		if(userToRemove==null) return new MessageValidation("Entity not found  to remove");
		else if(userToRemove instanceof Candidat) return candidatService.remove((Candidat)userToRemove);
		URepo.delete(userToRemove);
		return new MessageValidation("User removed, update you your user list");
	}
	public Optional<UserEnt> getUserById(long id) {
		// TODO Auto-generated method stub
		return URepo.findById(id);
	}
}
