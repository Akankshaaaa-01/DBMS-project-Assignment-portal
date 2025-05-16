CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL,
    email VARCHAR(100) -- optional, backend mein agar use karna hai
);

CREATE TABLE group_table (
    id INT PRIMARY KEY AUTO_INCREMENT,
    group_code VARCHAR(20) NOT NULL UNIQUE,
    semester VARCHAR(10),
    section VARCHAR(10),
    teacher_id INT,
    CONSTRAINT fk_teacher FOREIGN KEY (teacher_id) REFERENCES users(id)
);

CREATE TABLE student_group (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    group_id INT NOT NULL,
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES users(id),
    CONSTRAINT fk_group FOREIGN KEY (group_id) REFERENCES group_table(id),
    UNIQUE(student_id, group_id)
);

CREATE TABLE assignments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    group_id INT NOT NULL,
    title VARCHAR(100),
    description TEXT,
    deadline DATETIME,
    CONSTRAINT fk_group_assign FOREIGN KEY (group_id) REFERENCES group_table(id)
);

CREATE TABLE submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    assignment_id INT NOT NULL,
    student_id INT NOT NULL,
    file_path VARCHAR(255),
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_assignment FOREIGN KEY (assignment_id) REFERENCES assignments(id),
    CONSTRAINT fk_student_sub FOREIGN KEY (student_id) REFERENCES users(id)
);
