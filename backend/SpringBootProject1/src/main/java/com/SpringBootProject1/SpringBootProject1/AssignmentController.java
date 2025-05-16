package com.SpringBootProject1.SpringBootProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/assignments")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;

    @GetMapping("/")
    public List<Assignment> getAllAssignments() {
        return assignmentService.getAllAssignments();
    }

    @GetMapping("/group/{groupId}")
    public List<Assignment> getAssignmentsByGroup(@PathVariable Integer groupId) {
        return assignmentService.getAssignmentsByGroupId(groupId);
    }

    @GetMapping("/{id}")
    public Optional<Assignment> getAssignmentById(@PathVariable Integer id) {
        return assignmentService.getAssignmentById(id);
    }

    @PostMapping("/")
    public Assignment createAssignment(@RequestBody Assignment assignment) {
        return assignmentService.saveAssignment(assignment);
    }

    @DeleteMapping("/{id}")
    public void deleteAssignment(@PathVariable Integer id) {
        assignmentService.deleteAssignment(id);
    }
}