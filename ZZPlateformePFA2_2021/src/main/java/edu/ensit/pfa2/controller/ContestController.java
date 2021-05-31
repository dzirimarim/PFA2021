package edu.ensit.pfa2.controller;

import edu.ensit.pfa2.model.ProblemModel;
import edu.ensit.pfa2.repository.ContestsRepo;
import edu.ensit.pfa2.service.ContestsService;
import edu.ensit.pfa2.service.ProblemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/contests")
public class ContestController {
    @Autowired
    ContestsService ctstService;
    @Autowired
    ProblemsService pService;
    @GetMapping("")
    public ResponseEntity getAll(){
        return ResponseEntity.ok(ctstService.getAll());
    }
    /**********problem**********/
    @PostMapping(value = "/problem/add")
    public ResponseEntity addNew(@RequestPart(value="problemContent") MultipartFile problemContent, @RequestParam(value="input") MultipartFile input,
                                 @RequestParam(value="output") MultipartFile out,
                                 @RequestParam(value="code") String code,@RequestParam(value="discription") MultipartFile disc,
                                 @RequestParam(value="level") int level,
                                 @RequestParam(value="contest") String contest){
        return ResponseEntity.ok("");
    }
}
