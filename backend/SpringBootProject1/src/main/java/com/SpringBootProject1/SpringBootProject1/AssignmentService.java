package com.SpringBootProject1.SpringBootProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }

    public List<Assignment> getAssignmentsByGroupId(Integer groupId) {
        return assignmentRepository.findByGroupId(groupId);
    }

    public Optional<Assignment> getAssignmentById(Integer id) {
        return assignmentRepository.findById(id);
    }

    public Assignment saveAssignment(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    public void deleteAssignment(Integer id) {
        assignmentRepository.deleteById(id);
    }
}

