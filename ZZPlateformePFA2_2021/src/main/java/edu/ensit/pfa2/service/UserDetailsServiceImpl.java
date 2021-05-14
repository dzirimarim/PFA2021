package edu.ensit.pfa2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.ensit.pfa2.entity.UserEnt;
import edu.ensit.pfa2.exceptions.RessourceNotFoundException;
import edu.ensit.pfa2.repository.CandidatRepo;
import edu.ensit.pfa2.repository.UserE;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserE userRep;
	@Autowired
	CandidatRepo candidatRep;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		UserEnt user = userRep.findByUsername(username);

		if (user == null) {
			throw new UsernameNotFoundException("User Not Found with -> username or email : " + username);
		}

		return UserPrincipale.build(user);
	}
}