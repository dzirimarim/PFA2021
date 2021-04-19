package edu.ensit.pfa2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "roles" ,  schema="pfa2_2021")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Enumerated(EnumType.STRING)
	@NaturalId
	@Column(length = 60)
	private RoleName roleName;
	@NaturalId
	private short priority;
	public RoleName getRoleName() {
		return roleName;
	}
	public void setRoleName(RoleName roleName) {
		this.roleName = roleName;
	}
	public short getPriority() {
		return priority;
	}
	public void setPriority(short priority) {
		this.priority = priority;
	}
	public Role(RoleName roleName) {
		super();
		this.roleName = roleName;
	}
	public Role() {
		
	}
	public Role(Long id, RoleName roleName, short priority) {
		super();
		this.id = id;
		this.roleName = roleName;
		this.priority = priority;
	}	
}
