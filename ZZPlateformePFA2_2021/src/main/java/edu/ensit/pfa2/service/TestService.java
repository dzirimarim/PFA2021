package edu.ensit.pfa2.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityNotFoundException;

import org.jvnet.hk2.annotations.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import edu.ensit.pfa2.entity.Category;
import edu.ensit.pfa2.entity.Proposition;
import edu.ensit.pfa2.entity.Question;
import edu.ensit.pfa2.entity.Test;
import edu.ensit.pfa2.exceptions.RessourceNotFoundException;
import edu.ensit.pfa2.repository.CategoryRepo;
import edu.ensit.pfa2.repository.TestRepo;

@Component
public class TestService {
	@Autowired
	TestRepo Trep;
	@Autowired
	CategoryRepo Crep;
	@Autowired
	QuestionService questionService;

	public Test getTestById(Long id) throws EntityNotFoundException {
		return Trep.findById(id).orElseThrow(() -> new EntityNotFoundException("Test not found with id -->" + id));
	}

	public List<Test> getAllTests() {

		return (List<Test>) Trep.findAll();
	}

	public boolean saveTest(Test test) throws RessourceNotFoundException {
		if (test.getId() == null)
			test.setId(Trep.save(new Test()).getId());

		Set<Question> questions = test.getQuestions();
		for (Question question : questions) {
			if (question.getId() == null) {
				question.setTests(new ArrayList<>());

				List<Proposition> propositions = question.getPropositions();
				for (Proposition questionProposition : propositions) {
					questionProposition.setQuestion(question);
					// System.out.println(questionProposition.isTrue());
				}
				question.addTest(test);
				question.setPropositions(propositions);
			} else {
				Question question1 = questionService.getQuestionById(question.getId());
				// question1.setPropositions(question.getPropositions());
				if (question1.getTests() == null)
					question.setTests(new ArrayList<>());
				else
					question.setTests(question1.getTests());
				if (question.getLevel() > 0)
					question1.setLevel(question.getLevel());
				if (question.getScore() > 0)
					question1.setScore(question.getScore());
				if (question.getMaxTime() > 0)
					question1.setMaxTime(question.getMaxTime());
				if (question.getTitle() != null)
					question1.setTitle(question.getTitle());
				// question.setCategory(question1.getCategory());

				List<Proposition> propositions = question.getPropositions();
				for (Proposition Proposition : propositions) {
					Proposition.setQuestion(question);

				}
				/*
				 * if(subCategoryServices.getSubCategoryById(question.getCategory().getId())!=
				 * null) question.setCategory(subCategoryServices.getSubCategoryById(question.
				 * getCategory().getId())); else question.addNxT(test);
				 */
				question.setPropositions(propositions);
			}
		}
		test.setQuestions(questions);
		Trep.save(test);
		// System.out.println(test.getId());
		return Trep.existsById(test.getId());
	}



}
