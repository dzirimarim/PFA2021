package edu.ensit.pfa2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.NaturalId;

@Entity
public class UserRole {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Enumerated(EnumType.STRING)
	@NaturalId
	@Column(length = 60)
	private RoleName roleName;
	@NaturalId
	private short priority;

	public UserRole() {
	}

	public UserRole(RoleName name) {
		this.roleName = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public RoleName getRoleName() {
		return roleName;
	}

	public void setRoleName(RoleName name) {
		this.roleName = name;
	}

	public short getPriority() {
		return priority;
	}

	public void setPriority(short priority) {
		this.priority = priority;
	}

	
}