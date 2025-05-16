package com.SpringBootProject1.SpringBootProject1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentGroupService {

    @Autowired
    private StudentGroupRepository studentGroupRepository;

    public List<StudentGroup> getAllStudentGroups() {
        return studentGroupRepository.findAll();
    }

    public Optional<StudentGroup> getStudentGroupById(Integer id) {
        return studentGroupRepository.findById(id);
    }

    public StudentGroup saveStudentGroup(StudentGroup studentGroup) {
        return studentGroupRepository.save(studentGroup);
    }

    public void deleteStudentGroup(Integer id) {
        studentGroupRepository.deleteById(id);
    }

    public List<StudentGroup> findByStudentId(Integer studentId) {
        return studentGroupRepository.findByStudentId(studentId);
    }

    public List<StudentGroup> findByGroupId(Integer groupId) {
        return studentGroupRepository.findByGroupId(groupId);
    }
}
