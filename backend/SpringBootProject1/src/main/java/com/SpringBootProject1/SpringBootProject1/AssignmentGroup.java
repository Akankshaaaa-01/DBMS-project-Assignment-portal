package com.SpringBootProject1.SpringBootProject1;

import javax.persistence.*;


@Entity
@Table(name = "group_table")
public class AssignmentGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "group_code", nullable = false, unique = true)
    private String groupCode;

    private String semester;

    private String section;

    @Column(name = "teacher_id")
    private Integer teacherId;

    // Getters and setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getGroupCode() { return groupCode; }
    public void setGroupCode(String groupCode) { this.groupCode = groupCode; }

    public String getSemester() { return semester; }
    public void setSemester(String semester) { this.semester = semester; }

    public String getSection() { return section; }
    public void setSection(String section) { this.section = section; }

    public Integer getTeacherId() { return teacherId; }
    public void setTeacherId(Integer teacherId) { this.teacherId = teacherId; }
}