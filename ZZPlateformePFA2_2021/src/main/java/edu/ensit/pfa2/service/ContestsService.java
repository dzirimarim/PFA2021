package edu.ensit.pfa2.service;

import edu.ensit.pfa2.entity.algo.Contest;
import edu.ensit.pfa2.repository.ContestsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ContestsService {
    @Autowired
    ContestsRepo contestRepo;

    public List getAll() {
        Iterable<Contest> all = contestRepo.findAll();
        List list =new ArrayList();
        all.forEach(list::add);
        return list;
    }
    public boolean add(Contest ctx){
        contestRepo.save(ctx);
        return true;
    }

    public Optional<Contest> getWithCode(String code) {

        return contestRepo.findByCode(code);
    }
}
