package edu.ensit.pfa2.controller;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import edu.ensit.pfa2.entity.Category;
import edu.ensit.pfa2.entity.Question;
import edu.ensit.pfa2.entity.Test;
import edu.ensit.pfa2.exceptions.RessourceNotFoundException;
import edu.ensit.pfa2.repository.CategoryRepo;
import edu.ensit.pfa2.repository.TestRepo;
import edu.ensit.pfa2.service.TestService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/public")
public class TestController {

	@Autowired
	TestRepo Trep;

	TestService testService;
	CategoryRepo Crep;

//	@RequestMapping("/alltests")
//	public @ResponseBody ResponseEntity<?> getAllNxT() {
//		return ResponseEntity.ok(testService.getAllTests());
//	}

	@GetMapping("/alltests")
	public List<Test> getAllTests() {
		return (List<Test>) Trep.findAll();
	}

	@RequestMapping("/createnewtest")
	public @ResponseBody boolean createTest(@RequestBody Test test) throws RessourceNotFoundException {
		if (test.equals(null))
			return false;
		else
			try {
				return testService.saveTest(test);
			} catch (EntityNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
	};

	@RequestMapping("/getQuestions")
	public @ResponseBody List<Test> getTests() {
		return testService.getAllTests();
	};

	@RequestMapping("/getTestById")
	public @ResponseBody Test getTestFromCandidatNxTId(@RequestParam("id") long id) throws EntityNotFoundException {
		Test test = Trep.findById(id).orElseThrow(() -> new EntityNotFoundException());
		
		return test;
	}

}
