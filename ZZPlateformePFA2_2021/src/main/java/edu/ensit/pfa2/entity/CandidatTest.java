package edu.ensit.pfa2.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "candidat_test")
public class CandidatTest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private ReponseResult responseResult;
	@ManyToOne(cascade = CascadeType.MERGE)
	private Candidat candidat;
	@ManyToOne(cascade = CascadeType.MERGE)
	private Test test;
	@Column(name = "contest_id")
	private long contestId;

	@ManyToOne
	private SubCategory subCategory;
	private int maxQuestion = 5;
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	private UserEnt author;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public ReponseResult getResponseResult() {
		return responseResult;
	}
	public void setResponseResult(ReponseResult responseResult) {
		this.responseResult = responseResult;
	}
	public Candidat getCandidat() {
		return candidat;
	}
	public void setCandidat(Candidat candidat) {
		this.candidat = candidat;
	}
	public Test getTest() {
		return test;
	}
	public void setTest(Test test) {
		this.test = test;
	}
	public long getContestId() {
		return contestId;
	}
	public void setContestId(long contestId) {
		this.contestId = contestId;
	}
	public SubCategory getSubCategory() {
		return subCategory;
	}
	public void setSubCategory(SubCategory subCategory) {
		this.subCategory = subCategory;
	}
	public int getMaxQuestion() {
		return maxQuestion;
	}
	public void setMaxQuestion(int maxQuestion) {
		this.maxQuestion = maxQuestion;
	}
	public UserEnt getAuthor() {
		return author;
	}
	public void setAuthor(UserEnt author) {
		this.author = author;
	}
	public CandidatTest(ReponseResult responseResult, Candidat candidat, Test test, long contestId,
			SubCategory subCategory, int maxQuestion, UserEnt author) {
		super();
		this.responseResult = responseResult;
		this.candidat = candidat;
		this.test = test;
		this.contestId = contestId;
		this.subCategory = subCategory;
		this.maxQuestion = maxQuestion;
		this.author = author;
	}
	
	
}
