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

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "questionReponse")
public class QuestionReponse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private ReponseResult TResponse;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Question TQuestion;
	@OneToMany(mappedBy = "TQuestionResponse", cascade = CascadeType.ALL)
	private List<PropositionReponse> TPropositionResponses;
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
	public Question getTQuestion() {
		return TQuestion;
	}
	public void setTQuestion(Question tQuestion) {
		TQuestion = tQuestion;
	}
	public List<PropositionReponse> getTPropositionResponses() {
		return TPropositionResponses;
	}
	public void setTPropositionResponses(List<PropositionReponse> tPropositionResponses) {
		TPropositionResponses = tPropositionResponses;
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
