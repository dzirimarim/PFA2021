package edu.ensit.pfa2.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Proposition implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Question question;

	@JsonProperty
	private boolean isTrue;
	private String title;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}

	@JsonIgnore
	public boolean isTrue() {
		return isTrue;
	}

	@JsonIgnore
	public void setTrue(boolean isTrue) {
		this.isTrue = isTrue;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
}
