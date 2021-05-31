package edu.ensit.pfa2.entity.algo;

import edu.ensit.pfa2.entity.UserEnt;

import javax.persistence.*;

@Entity
public class ProblemSubmition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Lob
    byte[] code;

    @ManyToOne
    UserEnt user;


    @ManyToOne
    Problem problem;

    @ManyToOne
    Contest contest;

    String result = "N/A";

    public Contest getContest() {
        return contest;
    }

    public void setContest(Contest contest) {
        this.contest = contest;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public byte[] getCode() {
        return code;
    }

    public void setCode(byte[] code) {
        this.code = code;
    }

    public UserEnt getUser() {
        return user;
    }

    public void setUser(UserEnt user) {
        this.user = user;
    }

    public Problem getProblem() {
        return problem;
    }

    public void setProblem(Problem problem) {
        this.problem = problem;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
