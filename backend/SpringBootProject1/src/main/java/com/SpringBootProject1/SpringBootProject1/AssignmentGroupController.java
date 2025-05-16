package com.SpringBootProject1.SpringBootProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/groups")
public class AssignmentGroupController {

    @Autowired
    private AssignmentGroupService assignmentGroupService;

    @GetMapping("/")
    public List<AssignmentGroup> getAllGroups() {
        return assignmentGroupService.getAllGroups();
    }

    @GetMapping("/{id}")
    public Optional<AssignmentGroup> getGroupById(@PathVariable Integer id) {
        return assignmentGroupService.getGroupById(id);
    }

    @PostMapping("/")
    public AssignmentGroup createGroup(@RequestBody AssignmentGroup group) {
        return assignmentGroupService.saveGroup(group);
    }

    @DeleteMapping("/{id}")
    public void deleteGroup(@PathVariable Integer id) {
        assignmentGroupService.deleteGroup(id);
    }
}
