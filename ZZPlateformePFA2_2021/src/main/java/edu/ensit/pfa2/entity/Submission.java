package edu.ensit.pfa2.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "submission")
public class Submission {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="submission_id")
	private long submissionId;
	@Column(name="problem_id")
	private long problemId;
	@ManyToOne
	private CandidatTest candidatTest;
	Date date=new Date();
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getSubmissionId() {
		return submissionId;
	}
	public void setSubmissionId(long submissionId) {
		this.submissionId = submissionId;
	}
	public long getProblemId() {
		return problemId;
	}
	public void setProblemId(long problemId) {
		this.problemId = problemId;
	}

	public CandidatTest getCandidateNxT() {
		return candidatTest;
	}

	public void setCandidatTest(CandidatTest candidatT) {
		this.candidatTest = candidatT;
	}
 Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
}
