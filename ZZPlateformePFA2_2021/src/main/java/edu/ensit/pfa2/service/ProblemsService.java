package edu.ensit.pfa2.service;

import edu.ensit.pfa2.entity.algo.Contest;
import edu.ensit.pfa2.entity.algo.Problem;
import edu.ensit.pfa2.model.ProblemModel;
import edu.ensit.pfa2.repository.ProblemsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;
import java.util.Set;

@Service
public class ProblemsService {

    @Autowired
    ProblemsRepo problemeRepo;

    @Autowired
    ContestsService ctService;

    public boolean addNew(ProblemModel model) throws EntityNotFoundException{
        Problem p = model.mapToProblem();
        Optional<Contest> contest = ctService.getWithCode(model.getContest());
        if(!contest.isPresent()){
            throw new EntityNotFoundException();
        }
        Contest c = contest.get();
        Set pr = c.getProblems();
        pr.add(p);
        return true;
    }

}
