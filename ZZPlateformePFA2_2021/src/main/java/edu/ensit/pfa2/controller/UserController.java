package edu.ensit.pfa2.controller;
import java.security.Principal;
import java.util.Base64;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import edu.ensit.pfa2.entity.Candidat;
import edu.ensit.pfa2.entity.Question;
import edu.ensit.pfa2.entity.RoleName;
import edu.ensit.pfa2.entity.UserEnt;
import edu.ensit.pfa2.repository.UserE;
import edu.ensit.pfa2.service.CandidatService;
import edu.ensit.pfa2.service.UserService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

		RoleName roleName;
		@Autowired
		UserE userRep;
		@Autowired
		UserService userService;
		@Autowired
		CandidatService candidatService; 

		@RequestMapping("/all")
		public @ResponseBody List<UserEnt> getAllUsers(HttpServletRequest request) {
			return (List<UserEnt>) userRep.findAll();
		}

//		@RequestMapping("/all/candidat")
//		public @ResponseBody Set<Candidat> getAllCandidat() {
//			return candidatServices.getAll();
//		}

		@GetMapping("/users")
		public List<UserEnt> getAllUsers(){
			return (List<UserEnt>) userRep.findAll();
		}	
		
		@PostMapping("/users/add")
		public UserEnt createUser(@RequestBody UserEnt user) {
			return userRep.save(user);
		} 
		
		@RequestMapping("/editusers")

		public @ResponseBody ResponseEntity<?> editUser(@RequestBody Candidat user) {
			if (!candidatService.existById(user.getId())) {
				UserEnt userEntity = new UserEnt(user.getName(), user.getUsername(), user.getEmail(),
						user.getPassword(), user.getAddress(), user.getDateOfBirth());
				userEntity.setId(user.getId());
				userEntity.setActivated(user.isActivated());
				userEntity.setPhone(user.getPhone());
				userEntity.setRoles(user.getRoles());
				return new ResponseEntity<>(userService.editUser(userEntity), HttpStatus.OK);

		   }

			return new ResponseEntity<>(userService.editCandidate((Candidat) user), HttpStatus.OK);

		}

		@RequestMapping("/users/remove")
		public @ResponseBody ResponseEntity<?> removeUser(@RequestParam("id") Long id) {

			return ResponseEntity.ok(userService.remove(id));
		}

//		@RequestMapping("/editmyprofil")
//		public @ResponseBody ResponseEntity<?> editProfil(@RequestBody Candidate user) {
//			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//			if (user.getUsername().equals(auth.getName())) {
//				if (!candidatServices.existById(user.getId())) {
//					UserEntity userEntity = new UserEntity(user.getName(), user.getUsername(), user.getEmail(),
//							user.getPassword(), user.getAdress(), user.getDateOfBirth());
//					userEntity.setId(user.getId());
//					userEntity.setActivated(user.isActivated());
//					userEntity.setPhone(user.getPhone());
//					userEntity.setRoles(user.getRoles());
//					return new ResponseEntity<>(userServices.editUser(userEntity), HttpStatus.OK);
//
//				}
//
//				return new ResponseEntity<>(userServices.editCandidate((Candidate) user), HttpStatus.OK);
//			}
//			return new ResponseEntity(HttpStatus.FORBIDDEN);
//		}

//		@GetMapping("/getmyprofil")
//		public @ResponseBody ResponseEntity<?> getMyProfil() {
//			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//			UserEntity user = userServices.getUserByUsername(auth.getName()).orElse(null);
//			return ResponseEntity.ok(user);
//		}
//
		@GetMapping("/getuserbyid")
		public @ResponseBody ResponseEntity<?> getMyProfilByUID(@RequestParam("id") long id) {
			UserEnt user = userService.getUserById(id).orElse(null);
			return ResponseEntity.ok(user);
		}

		
		
//		 @RequestMapping("/login")
//		    public boolean login(@RequestBody UserEnt user) {
//		        return
//		          user.getUsername().equals("user") && user.getPassword().equals("password");
//		    }
//			
//		    @RequestMapping("/user")
//		    public Principal user(HttpServletRequest request) {
//		        String authToken = request.getHeader("Authorization")
//		          .substring("Basic".length()).trim();
//		        return () ->  new String(Base64.getDecoder().decode(authToken)).split(":")[0];
//		    }
//		    
		    
}
