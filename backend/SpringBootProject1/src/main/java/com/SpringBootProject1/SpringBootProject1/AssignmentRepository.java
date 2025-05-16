package com.SpringBootProject1.SpringBootProject1;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {
    List<Assignment> findByGroupId(Integer groupId);
}