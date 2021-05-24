package edu.ensit.pfa2.controller;

import java.util.Collection;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ensit.pfa2.entity.Candidat;
import edu.ensit.pfa2.entity.RoleName;
import edu.ensit.pfa2.entity.UserEnt;
import edu.ensit.pfa2.entity.UserRole;
import edu.ensit.pfa2.model.LoginForm;
import edu.ensit.pfa2.model.UserForm;
import edu.ensit.pfa2.reponse.JwtResponse;
import edu.ensit.pfa2.reponse.ResponseMessage;
import edu.ensit.pfa2.repository.UserE;
import edu.ensit.pfa2.repository.CandidatRepo;
import edu.ensit.pfa2.request.SignUpForm;
import edu.ensit.pfa2.repository.RoleRep;
import edu.ensit.pfa2.security.jwt.JwtProvider;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/public/auth")
public class AuthRestAPIs {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserE userRepository;

	@Autowired
	RoleRep roleRepository;

	@Autowired
	CandidatRepo candidatRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtProvider jwtProvider;

	@PostMapping("/signin")
	public ResponseEntity authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

		try {
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

			SecurityContextHolder.getContext().setAuthentication(authentication);

			String jwt = jwtProvider.generateJwtToken(authentication);
			UserDetails userDetails = (UserDetails) authentication.getPrincipal();
			return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
		} catch (DisabledException exp) {
			return new ResponseEntity<String>("user disabled, please contact IT team", HttpStatus.BAD_REQUEST);
		} catch (BadCredentialsException badCrid) {
			return new ResponseEntity<String>("bad cedentials, login or/and password is wrong", HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("unknown error occured", HttpStatus.BAD_REQUEST);
		}

	}

	@PostMapping("/signup")
	public ResponseEntity registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
					HttpStatus.BAD_REQUEST);
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
					HttpStatus.BAD_REQUEST);
		}

		// Creating user's account
		UserEnt user = new UserEnt(signUpRequest.getName(), signUpRequest.getUsername(), signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole() == null ? new HashSet<String>() : signUpRequest.getRole();
		// we can do better => create mapper in model and create a user builder from
		// user model
		Function<String, UserRole> mapper = (rule -> {
			if ("admin".equalsIgnoreCase(rule)) {
				UserRole adminRole = roleRepository.findByRoleName(RoleName.ROLE_ADMIN)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
				return adminRole;
			}
			if ("manager".equalsIgnoreCase(rule)) {
				UserRole pmRole = roleRepository.findByRoleName(RoleName.ROLE_MANAGER)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
				return pmRole;
			}
			// default role
			return roleRepository.findByRoleName(RoleName.ROLE_CANDIDATE)
					.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
		});

		if (CollectionUtils.isEmpty(strRoles)) {
			strRoles.add("admin");
		}
		Set<UserRole> roles = strRoles.stream().map(mapper).collect(Collectors.toSet());
		user.setRoles(roles);
		user.setActivated(true); // to be deleted 
		userRepository.save(user);

		return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
	}

	@PostMapping("/signupcandidat")
	public ResponseEntity<?> registerCandidate(@Valid @RequestBody UserForm signUpRequest) {
//		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
//			return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
//					HttpStatus.BAD_REQUEST);
//		}

//		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
//			return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
//					HttpStatus.BAD_REQUEST);
//		}

		Candidat user = new Candidat(signUpRequest.getName(), signUpRequest.getUsername(), signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()), signUpRequest.getAdress(), signUpRequest.getDateOfBirth());

		Set<UserRole> roles = new HashSet<>();

		UserRole userRole = roleRepository.findByRoleName(RoleName.ROLE_CANDIDATE)
				.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
		roles.add(userRole);

		user.setRoles(roles);
		candidatRepository.save(user);

		return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
	}
}