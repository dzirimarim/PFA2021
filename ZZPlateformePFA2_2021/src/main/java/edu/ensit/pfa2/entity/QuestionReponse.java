package edu.ensit.pfa2.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
public class QuestionReponse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private ReponseResult TResponse;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Question tQuestion;
	@OneToMany(mappedBy = "id", cascade = CascadeType.ALL)
	private List<PropositionReponse> PropositionResponses;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss a z", timezone = "GMT+1")
	private Date submitDate = new Date();
	private Double questionScore;
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public ReponseResult getTResponse() {
		return TResponse;
	}
	public void setTResponse(ReponseResult tResponse) {
		TResponse = tResponse;
	}
	public Question gettQuestion() {
		return tQuestion;
	}
	public void settQuestion(Question tQuestion) {
		tQuestion = tQuestion;
	}
	public List<PropositionReponse> getTPropositionResponses() {
		return PropositionResponses;
	}
	public void setTPropositionResponses(List<PropositionReponse> tPropositionResponses) {
		PropositionResponses = tPropositionResponses;
	}
	public Date getSubmitDate() {
		return submitDate;
	}
	public void setSubmitDate(Date submitDate) {
		this.submitDate = submitDate;
	}
	public Double getQuestionScore() {
		return questionScore;
	}
	public void setQuestionScore(Double questionScore) {
		this.questionScore = questionScore;
	}
	

}
