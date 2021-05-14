package edu.ensit.pfa2.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
public class Test {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	@ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinTable(name = "tQuestion", joinColumns = @JoinColumn(name = "id"), inverseJoinColumns = @JoinColumn(name = "question_id"))
	@JsonIgnoreProperties("tests")
	private Set<Question> questions;
	private String description;
	@ManyToOne
	Category category;
	@ManyToMany(cascade = CascadeType.MERGE)
	private List<UserEnt> autheurs;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Set<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public List<UserEnt> getAutheurs() {
		return autheurs;
	}
	public void setAutheurs(List<UserEnt> autheurs) {
		this.autheurs = autheurs;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	

}
