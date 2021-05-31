package edu.ensit.pfa2.service;

import edu.ensit.pfa2.repository.ProblemSubmitionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProblemSubmition {
    @Autowired
    ProblemSubmitionRepo repo;
}
