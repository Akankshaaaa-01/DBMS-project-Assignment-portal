package com.SpringBootProject1.SpringBootProject1;



import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentGroupRepository extends JpaRepository<StudentGroup, Integer> {
    List<StudentGroup> findByStudentId(Integer studentId);
    List<StudentGroup> findByGroupId(Integer groupId);
}