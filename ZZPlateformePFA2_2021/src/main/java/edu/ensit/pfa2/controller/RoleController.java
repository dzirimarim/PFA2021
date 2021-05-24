package edu.ensit.pfa2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ensit.pfa2.service.RoleService;


@CrossOrigin(origins = "http://localhost:4200" , maxAge = 3600)
@RestController
@RequestMapping("/api/public")
public class RoleController {
	
	@Autowired
	private RoleService roleServ;
	
	@GetMapping("/roles")
	public ResponseEntity<?> roles(){
		return new ResponseEntity<>(roleServ.getAll(),HttpStatus.OK);
	}

}
