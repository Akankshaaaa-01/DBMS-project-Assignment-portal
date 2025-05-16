package com.SpringBootProject1.SpringBootProject1;


import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SubmissionRepository extends JpaRepository<Submission, Integer> {
    List<Submission> findByAssignmentId(Integer assignmentId);
    List<Submission> findByStudentId(Integer studentId);
}
