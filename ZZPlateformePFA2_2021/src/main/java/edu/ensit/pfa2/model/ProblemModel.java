package edu.ensit.pfa2.model;

import edu.ensit.pfa2.entity.algo.Problem;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class ProblemModel {
    private MultipartFile problemContent;
    private MultipartFile input;
    private MultipartFile output;
    private String name;
    private String code;
    private String discription;
    private String contest;

    public Problem mapToProblem(){
        Problem p = new Problem();
        try {
            p.setCode(code);
            p.setDiscription(discription);

            if(!problemContent.isEmpty())
                p.setProblemContent(problemContent.getBytes());

            if(!input.isEmpty())
                p.setInput(input.getBytes());
            if(!output.isEmpty())
                p.setOutput(output.getBytes());
            p.setName(name);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return p;
    }

    public MultipartFile getInput() {
        return input;
    }

    public void setInput(MultipartFile input) {
        this.input = input;
    }

    public MultipartFile getOutput() {
        return output;
    }

    public void setOutput(MultipartFile output) {
        this.output = output;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getContest() {
        return contest;
    }

    public void setContest(String contest) {
        this.contest = contest;
    }

    public MultipartFile getProblemContent() {
        return problemContent;
    }

    public void setProblemContent(MultipartFile problemContent) {
        this.problemContent = problemContent;
    }
}
