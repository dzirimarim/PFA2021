package edu.ensit.pfa2.entity;

import java.sql.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "candidat")
@PrimaryKeyJoinColumn(name = "id")
public class Candidat extends UserEnt {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int teamId;
	private int uid;
	
	@OneToMany(mappedBy = "candidat", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnore
	private List<CandidatTest> candidatTest;
	@ManyToMany
	private Set<Topic> Topics;
	public Candidat(Long id, String name, String username, String email, String password, String address, int phone,
			Set<Role> roles, Date dateOfBirth, int teamId, int uid, List<CandidatTest> candidatTest,
			Set<Topic> topics) {
		super(id, name, username, email, password, address, phone, roles, dateOfBirth);
		this.teamId = teamId;
		this.uid = uid;
		this.candidatTest = candidatTest;
		Topics = topics;
	}
	public Candidat() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Candidat(Long id, String name, String username, String email, String password, String address, int phone,
			Set<Role> roles, Date dateOfBirth) {
		super(id, name, username, email, password, address, phone, roles, dateOfBirth);
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getTeamId() {
		return teamId;
	}
	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public List<CandidatTest> getCandidatTest() {
		return candidatTest;
	}
	public void setCandidatTest(List<CandidatTest> candidatTest) {
		this.candidatTest = candidatTest;
	}
	public Set<Topic> getTopics() {
		return Topics;
	}
	public void setTopics(Set<Topic> topics) {
		Topics = topics;
	}
	
	
	

}
