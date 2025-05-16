package com.SpringBootProject1.SpringBootProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/submissions")
public class SubmissionController {

    @Autowired
    private SubmissionService submissionService;

    @GetMapping("/")
    public List<Submission> getAllSubmissions() {
        return submissionService.getAllSubmissions();
    }

    @GetMapping("/{id}")
    public Optional<Submission> getSubmissionById(@PathVariable Integer id) {
        return submissionService.getSubmissionById(id);
    }

    @PostMapping("/")
    public Submission createSubmission(@RequestBody Submission submission) {
        return submissionService.saveSubmission(submission);
    }

    @DeleteMapping("/{id}")
    public void deleteSubmission(@PathVariable Integer id) {
        submissionService.deleteSubmission(id);
    }

    @GetMapping("/by-assignment/{assignmentId}")
    public List<Submission> getByAssignmentId(@PathVariable Integer assignmentId) {
        return submissionService.findByAssignmentId(assignmentId);
    }

    @GetMapping("/by-student/{studentId}")
    public List<Submission> getByStudentId(@PathVariable Integer studentId) {
        return submissionService.findByStudentId(studentId);
    }
}