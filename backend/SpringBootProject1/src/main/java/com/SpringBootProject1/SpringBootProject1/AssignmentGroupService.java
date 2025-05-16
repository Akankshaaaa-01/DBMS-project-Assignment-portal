package com.SpringBootProject1.SpringBootProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AssignmentGroupService {

    @Autowired
    private AssignmentGroupRepository assignmentGroupRepository;

    public List<AssignmentGroup> getAllGroups() {
        return assignmentGroupRepository.findAll();
    }

    public Optional<AssignmentGroup> getGroupById(Integer id) {
        return assignmentGroupRepository.findById(id);
    }

    public AssignmentGroup saveGroup(AssignmentGroup group) {
        return assignmentGroupRepository.save(group);
    }

    public void deleteGroup(Integer id) {
        assignmentGroupRepository.deleteById(id);
    }
}
