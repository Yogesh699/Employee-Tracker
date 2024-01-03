-- Insert Department Data
INSERT INTO department (id, name)
VALUES
  (1, 'Engineering'),
  (2, 'Sales'),
  (3, 'Finance'),
  (4, 'Legal'),
  (5, 'Marketing'),
  (6, 'Human Resources'),
  (7, 'IT'),
  (8, 'Customer Service'),
  (9, 'Research and Development'),
  (10, 'Operations');

-- Inert Role Data
INSERT INTO role
  (id, title, salary, department_id)
VALUES
  (1, 'Software Engineer', 85000, 1),
  (2, 'Salesperson', 75000, 2),
  (3, 'Accountant', 125000, 3),
  (4, 'Lawyer', 200000, 4),
  (5, 'Marketing Specialist', 90000, 5),
  (6, 'HR Manager', 110000, 6),
  (7, 'IT Specialist', 95000, 7),
  (8, 'Customer Support Representative', 60000, 8),
  (9, 'Research Scientist', 120000, 9),
  (10, 'Operations Manager', 100000, 10);


-- Insert Employee Data
INSERT INTO employee
  (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'Liam', 'Smith', 1, NULL),
  (2, 'Olivia', 'Jones', 2, NULL),
  (3, 'Ava', 'Williams', 3, NULL),
  (4, 'Noah', 'Brown', 4, NULL),
  (5, 'Charlotte', 'Davis', 1, NULL),
  (6, 'Ethan', 'Miller', 2, NULL),
  (7, 'Isabella', 'Wilson', 3, NULL),
  (8, 'Mia', 'Moore', 4, NULL),
  (9, 'Oliver', 'Johnson', 5, NULL),
  (10, 'Amelia', 'Taylor', 6, NULL),
  (11, 'Lucas', 'Anderson', 7, NULL),
  (12, 'Sophia', 'White', 8, NULL),
  (13, 'Jack', 'Martin', 9, NULL),
  (14, 'Chloe', 'Thompson', 10, NULL),
  (15, 'William', 'Harris', 1, NULL),
  (16, 'Ruby', 'Clark', 2, NULL),
  (17, 'Elijah', 'Lee', 3, NULL),
  (18, 'Grace', 'Walker', 4, NULL),
  (19, 'James', 'Carter', 5, NULL);

-- Assign Manager to Employee
UPDATE employee SET manager_id = 1 WHERE id IN (5, 15);  
UPDATE employee SET manager_id = 2 WHERE id IN (6, 16); 
UPDATE employee SET manager_id = 3 WHERE id IN (7, 17);  
UPDATE employee SET manager_id = 4 WHERE id IN (8, 18); 
UPDATE employee SET manager_id = 5 WHERE id = 9; 
UPDATE employee SET manager_id = 6 WHERE id = 10; 
UPDATE employee SET manager_id = 7 WHERE id = 11;
UPDATE employee SET manager_id = 8 WHERE id = 12;
UPDATE employee SET manager_id = 9 WHERE id = 13;
UPDATE employee SET manager_id = 10 WHERE id = 14;