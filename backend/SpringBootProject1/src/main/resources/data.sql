-- Insert demo teachers
INSERT INTO users (username, password, role, email) VALUES
('teacher1', 'pass123', 'teacher', 'teacher1@example.com'),
('teacher2', 'pass456', 'teacher', 'teacher2@example.com');

-- Insert demo students
INSERT INTO users (username, password, role, email) VALUES
('student1', 'stud123', 'student', 'student1@example.com'),
('student2', 'stud456', 'student', 'student2@example.com'),
('student3', 'stud789', 'student', 'student3@example.com');

-- Insert groups created by teachers
INSERT INTO group_table (group_code, semester, section, teacher_id) VALUES
('GRP101', '4', 'A', 1),
('GRP102', '4', 'B', 2);

-- Add students to groups
INSERT INTO student_group (student_id, group_id) VALUES
(3, 1),  -- student1 in GRP101
(4, 1),  -- student2 in GRP101
(5, 2);  -- student3 in GRP102

-- Add assignments in groups
INSERT INTO assignments (group_id, title, description, deadline) VALUES
(1, 'DSA Assignment 1', 'Stacks and Queues', '2025-05-25 23:59:59'),
(2, 'DBMS Mini Project', 'Submit ERD and schema.sql', '2025-05-30 23:59:59');

-- Insert submission (just one for demo)
INSERT INTO submissions (assignment_id, student_id, file_path) VALUES
(1, 3, '/uploads/student1_dsa.pdf');
