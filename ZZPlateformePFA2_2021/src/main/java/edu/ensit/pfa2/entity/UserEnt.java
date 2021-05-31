package edu.ensit.pfa2.entity;

import java.sql.Date;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import edu.ensit.pfa2.entity.algo.Contest;
import org.hibernate.annotations.NaturalId;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class UserEnt {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	@NaturalId
	private String username;
	@NaturalId
	private String email;
	@JsonIgnore
	private String password;
	private String address;
	private int phone;
	private boolean isActivated;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "userRoles", joinColumns = @JoinColumn(name = "userId"), inverseJoinColumns = @JoinColumn(name = "roleId"))
	private Set<UserRole> roles = new HashSet<>();
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date dateOfBirth;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "userContest", joinColumns = @JoinColumn(name = "userId"), inverseJoinColumns = @JoinColumn(name = "contestId"))
	private Set<Contest> userContests = new HashSet<>();



	public UserEnt(String name, String username, String email, String password,
				   String address, int phone, Set<UserRole> roles, Date dateOfBirth) {
		super();
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.address = address;
		this.phone = phone;
		this.isActivated = false;
		this.roles = roles;
		this.dateOfBirth = dateOfBirth;
	}
	
	public UserEnt(String name, String username, String email, String password, String address, Date dateOfBirth) {
		this(name, username,email,password,address,false,dateOfBirth);
	}
	
	public UserEnt() {
	}
	
	public UserEnt(String name, String username, String email, String pwd) {
		// haaa nendebhom hedhi mahich implemented ya bnaya rakkez :p 
		this(name, username, email, pwd, null, null);
	}

	public UserEnt( String name, String username, String email, String password, String address, 
			boolean isActivated, Date dateOfBirth) {
		this(name, username, email, password, address,0, Collections.EMPTY_SET, dateOfBirth);
	}
	public Set<Contest> getUserContests() {
		return userContests;
	}

	public void setUserContests(Set<Contest> userContests) {
		this.userContests = userContests;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	public boolean isActivated() {
		return isActivated;
	}
	public void setActivated(boolean isActivated) {
		this.isActivated = isActivated;
	}
	public Set<UserRole> getRoles() {
		return roles;
	}
	public void setRoles(Set<UserRole> roles) {
		this.roles = roles;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String  getRole( ) {
		java.util.Iterator<UserRole> iter = roles.iterator();
        return iter.next().toString();
	}



}
