package edu.ensit.pfa2.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "reponseResult")
public class ReponseResult {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnore
	private UserEnt candidat;
	private double score;
	
	@OneToMany(mappedBy = "TResponse", cascade = CascadeType.ALL)
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<QuestionReponse> responses;
	private int candidatLevel = 0;
	@OneToOne(cascade = CascadeType.MERGE)
	private CandidatTest candidatTest;
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public UserEnt getCandidat() {
		return candidat;
	}
	public void setCandidat(UserEnt candidat) {
		this.candidat = candidat;
	}
	public double getScore() {
		return score;
	}
	public void setScore(double score) {
		this.score = score;
	}
	public List<QuestionReponse> getResponses() {
		return responses;
	}
	public void setResponses(List<QuestionReponse> responses) {
		this.responses = responses;
	}
	public int getCandidatLevel() {
		return candidatLevel;
	}
	public void setCandidatLevel(int candidatLevel) {
		this.candidatLevel = candidatLevel;
	}
	public CandidatTest getCandidatTest() {
		return candidatTest;
	}
	public void setCandidatTest(CandidatTest candidatTest) {
		this.candidatTest = candidatTest;
	}
	
}
