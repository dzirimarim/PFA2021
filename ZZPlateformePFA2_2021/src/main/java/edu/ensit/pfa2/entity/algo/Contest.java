package edu.ensit.pfa2.entity.algo;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Contest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @NaturalId
    String code;
    String discription;

    boolean enable;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "problemContest", joinColumns = @JoinColumn(name = "contestId"), inverseJoinColumns = @JoinColumn(name = "problemId"))
    private Set<Contest> problems = new HashSet<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }

    public boolean isEnable() {
        return enable;
    }

    public void setEnable(boolean enable) {
        this.enable = enable;
    }

    public Set<Contest> getProblems() {
        return problems;
    }

    public void setProblems(Set<Contest> problems) {
        this.problems = problems;
    }

}
