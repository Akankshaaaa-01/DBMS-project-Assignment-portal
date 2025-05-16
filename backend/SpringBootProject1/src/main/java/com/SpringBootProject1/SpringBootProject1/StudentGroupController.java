package com.SpringBootProject1.SpringBootProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student-groups")
public class StudentGroupController {

    @Autowired
    private StudentGroupService studentGroupService;

    @GetMapping("/")
    public List<StudentGroup> getAllStudentGroups() {
        return studentGroupService.getAllStudentGroups();
    }

    @GetMapping("/{id}")
    public Optional<StudentGroup> getStudentGroupById(@PathVariable Integer id) {
        return studentGroupService.getStudentGroupById(id);
    }

    @PostMapping("/")
    public StudentGroup createStudentGroup(@RequestBody StudentGroup studentGroup) {
        return studentGroupService.saveStudentGroup(studentGroup);
    }

    @DeleteMapping("/{id}")
    public void deleteStudentGroup(@PathVariable Integer id) {
        studentGroupService.deleteStudentGroup(id);
    }

    @GetMapping("/by-student/{studentId}")
    public List<StudentGroup> getByStudentId(@PathVariable Integer studentId) {
        return studentGroupService.findByStudentId(studentId);
    }

    @GetMapping("/by-group/{groupId}")
    public List<StudentGroup> getByGroupId(@PathVariable Integer groupId) {
        return studentGroupService.findByGroupId(groupId);
    }
}