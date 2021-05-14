package edu.ensit.pfa2.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Entity
public class PropositionReponse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="prop", nullable=false, updatable=false, insertable=false)
	private Proposition proposition;
	private boolean isTrue;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL )
    @JoinColumn(name="QR", nullable=false, updatable=false, insertable=false)
	private QuestionReponse questionReponse;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Proposition getProposition() {
		return proposition;
	}
	public void setProposition(Proposition proposition) {
		this.proposition = proposition;
	}
	public boolean isTrue() {
		return isTrue;
	}
	public void setTrue(boolean isTrue) {
		this.isTrue = isTrue;
	}
	public QuestionReponse getQuestionReponse() {
		return questionReponse;
	}
	public void setQuestionReponse(QuestionReponse questionReponse) {
		this.questionReponse = questionReponse;
	}
	
	
	

}
