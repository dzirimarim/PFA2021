package edu.ensit.pfa2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;



import edu.ensit.pfa2.entity.Candidat;
import edu.ensit.pfa2.entity.UserEnt;
import edu.ensit.pfa2.reponse.MessageValidation;
import edu.ensit.pfa2.repository.CandidatRepo;

@Component
public class CandidatService {

	@Autowired
	CandidatRepo CRepo;

	public Object editCandidate(Candidat user) {
		if (user.getId() == null || !CRepo.existsById(user.getId()))
			return new MessageValidation("id null or user not found with id ===> " + user.getId());
		try {
			UserEnt userInstance = CRepo.findById(user.getId()).orElse(null);
			user.setPassword(userInstance.getPassword());
			UserEnt userEntity = null;
			if (CRepo.existsByUsername(user.getUsername())) {
				userEntity = CRepo.findByUsername(user.getUsername()).orElse(null);
				if (userEntity.getId() != user.getId())
					return new MessageValidation(
							"you have change username with existing user name please try again: user id ===> "
									+ user.getId() + "this username is associeted to " + userEntity.getId());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return CRepo.save(user);
	}

	public boolean existById(Long id) {

		return CRepo.existsById(id);
	}
	public Object remove(Candidat userToRemove) {
		CRepo.delete(userToRemove);
		return new MessageValidation("user removed, update your user list");
	}
}
