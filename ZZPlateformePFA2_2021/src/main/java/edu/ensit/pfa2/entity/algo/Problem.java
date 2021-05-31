package edu.ensit.pfa2.entity.algo;

import org.hibernate.annotations.NaturalId;
import org.hibernate.type.BlobType;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @NaturalId
    String code;
    @NaturalId
    String name;
    String discription;
    int level;
    @Lob
    byte[] problemContent;

    @Lob
    byte[] input;

    @Lob
    byte[] output;

    public byte[] getProblemContent() {
        return problemContent;
    }

    public void setProblemContent(byte[] problemContent) {
        this.problemContent = problemContent;
    }

    public byte[] getInput() {
        return input;
    }

    public void setInput(byte[] input) {
        this.input = input;
    }

    public byte[] getOutput() {
        return output;
    }

    public void setOutput(byte[] output) {
        this.output = output;
    }

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }
}
