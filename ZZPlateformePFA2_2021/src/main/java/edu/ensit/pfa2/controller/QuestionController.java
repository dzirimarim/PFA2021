package edu.ensit.pfa2.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import edu.ensit.pfa2.entity.Question;
import edu.ensit.pfa2.exceptions.RessourceNotFoundException;
import edu.ensit.pfa2.repository.QuestionRepo;
import edu.ensit.pfa2.service.QuestionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class QuestionController {

		@Autowired
		private QuestionRepo questRepository;
		@Autowired
		QuestionService q ;
		
		// get all questions
		@GetMapping("/questions")
		public List<Question> getAllQuestion(){
			return questRepository.findAll();
		}		

		@RequestMapping("/questions/add")
		public void addQuestions(@RequestBody List<Question> questions) {
			q.saveQuestions(questions);
		}
		


		/******************************************************************/
		// get question by id rest api
		@GetMapping("/questions/{id}")
		public ResponseEntity<Question> getQuestionById(@PathVariable Long id) throws RessourceNotFoundException {
        Question quest = questRepository.findById(id)
        		 .orElseThrow(() -> new RessourceNotFoundException("Question not exist with id :" + id));
			return ResponseEntity.ok(quest);
		}
		
		// update question rest api
		
		@PutMapping("/questions/{id}")
		public ResponseEntity<Question> updateQuestion(@PathVariable Long id, @RequestBody Question questionDetails) throws RessourceNotFoundException{
			Question quest = questRepository.findById(id)
					  .orElseThrow(() -> new RessourceNotFoundException("Question not exist with id :" + id));
			
			quest.setTitle(questionDetails.getTitle());
			quest.setLevel(questionDetails.getLevel());
			quest.setScore(questionDetails.getScore());
			quest.setMaxTime(questionDetails.getMaxTime());
			quest.setPropositions(questionDetails.getPropositions());
			quest.setTests(questionDetails.getTests());
			
			Question updatedQuestion =   questRepository.save(quest);
			return ResponseEntity.ok(updatedQuestion);
		}

	@PostMapping("/questions/remove")
	public void remove(@RequestBody long id) {
		q.removeById(id);
	}
		// delete employee rest api
//		@DeleteMapping("/questions/remove/{id}")
//		public ResponseEntity<Map<String, Boolean>> deleteQuestion(@PathVariable Long id) throws RessourceNotFoundException{
//			Question quest = questRepository.findById(id)
//					 .orElseThrow(() -> new RessourceNotFoundException("question not exist with id :" + id));
//			
//			questRepository.delete(quest);
//			Map<String, Boolean> response = new HashMap<String, Boolean>();
//			response.put("deleted", Boolean.TRUE);
//			return ResponseEntity.ok(response);
//		}

		

	}
