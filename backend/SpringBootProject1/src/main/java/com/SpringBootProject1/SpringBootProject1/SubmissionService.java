package com.SpringBootProject1.SpringBootProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubmissionService {

    @Autowired
    private SubmissionRepository submissionRepository;

    public List<Submission> getAllSubmissions() {
        return submissionRepository.findAll();
    }

    public Optional<Submission> getSubmissionById(Integer id) {
        return submissionRepository.findById(id);
    }

    public Submission saveSubmission(Submission submission) {
        return submissionRepository.save(submission);
    }

    public void deleteSubmission(Integer id) {
        submissionRepository.deleteById(id);
    }

    public List<Submission> findByAssignmentId(Integer assignmentId) {
        return submissionRepository.findByAssignmentId(assignmentId);
    }

    public List<Submission> findByStudentId(Integer studentId) {
        return submissionRepository.findByStudentId(studentId);
    }
}