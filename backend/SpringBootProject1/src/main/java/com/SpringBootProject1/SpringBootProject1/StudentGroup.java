package com.SpringBootProject1.SpringBootProject1;

import javax.persistence.*;

@Entity
@Table(name = "student_group",
       uniqueConstraints = {@UniqueConstraint(columnNames = {"student_id", "group_id"})})
public class StudentGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private User student;

    @ManyToOne
    @JoinColumn(name = "group_id", nullable = false)
    private AssignmentGroup group;

    // Constructors
    public StudentGroup() {}

    public StudentGroup(User student, AssignmentGroup group) {
        this.student = student;
        this.group = group;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public User getStudent() {
        return student;
    }
    public void setStudent(User student) {
        this.student = student;
    }

    public AssignmentGroup getGroup() {
        return group;
    }
    public void setGroup(AssignmentGroup group) {
        this.group = group;
    }
}
