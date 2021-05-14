package edu.ensit.pfa2.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.jvnet.hk2.annotations.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import edu.ensit.pfa2.entity.Proposition;
import edu.ensit.pfa2.entity.Question;
import edu.ensit.pfa2.entity.SubCategory;
import edu.ensit.pfa2.exceptions.RessourceNotFoundException;
import edu.ensit.pfa2.repository.PropositionRepo;
import edu.ensit.pfa2.repository.QuestionRepo;


@Component
public class QuestionService {
	
	@Autowired
	QuestionRepo Qrep;
	@Autowired 
	PropositionRepo Prep;
	
	
	
	public void saveQuestions(List<Question> questions) {
		
		for (Question question : questions) {
			/*if(question.getId()!=null) {
				Question oldQuestion=Qrep.findById(question.getId()).orElse(null);
				if(oldQuestion!=null)
					question.setTests(oldQuestion.getTests());
			}*/
				
			List<Proposition> propositions = question.getPropositions();
			for (Proposition questionProposition : propositions) {
				questionProposition.setQuestion(question);
			}
			question.setPropositions(propositions);
		}
		Qrep.saveAll(questions);
	}
	
	public Question getQuestionById(Long quetionId) throws RessourceNotFoundException {
		return Qrep.findById(quetionId)
				.orElseThrow(() -> new RessourceNotFoundException("Question Not Found with id =" + quetionId));
		
	}
	public void removeById(long questionId) {
		Qrep.deleteById(questionId);
	}
	

}
