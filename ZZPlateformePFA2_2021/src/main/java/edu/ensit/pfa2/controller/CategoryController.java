package edu.ensit.pfa2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.ensit.pfa2.entity.Category;
import edu.ensit.pfa2.exceptions.RessourceNotFoundException;
import edu.ensit.pfa2.repository.CategoryRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/categories")
public class CategoryController {
	@Autowired
	private CategoryRepo catRepo ;
	
	// get all employees
	@GetMapping("")
	public List<Category> getAllCategory(){
		return catRepo.findAll();
	}		
	
	// create Category rest api
	@PostMapping("")
	public Category createCategory(@RequestBody Category Category) {
		return catRepo.save(Category);
	}
	
	// get Category by id rest api
	@GetMapping("/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable Long id) throws RessourceNotFoundException {
    Category quest = catRepo.findById(id)
    		 .orElseThrow(() -> new RessourceNotFoundException("Category not exist with id :" + id));
		return ResponseEntity.ok(quest);
	}
	

}
