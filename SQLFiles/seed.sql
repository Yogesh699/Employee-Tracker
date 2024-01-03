-- Insert Department Data
INSERT INTO department (name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Finance'),
  ('Legal'),
  ('Marketing'),
  ('Human Resources'),
  ('IT'),
  ('Customer Service'),
  ('Research and Development'),
  ('Operations');

-- Inert Role Data
INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Software Engineer', 85000, 1),
  ('Salesperson', 75000, 2),
  ('Accountant', 125000, 3),
  ('Lawyer', 200000, 4),
  ('Marketing Specialist', 90000, 5),
  ('HR Manager', 110000, 6),
  ('IT Specialist', 95000, 7),
  ('Customer Support Representative', 60000, 8),
  ('Research Scientist', 120000, 9),
  ('Operations Manager', 100000, 10);


-- Insert Employee Data
INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Liam', 'Smith', 1, NULL),
  ('Olivia', 'Jones', 2, NULL),
  ('Ava', 'Williams', 3, NULL),
  ('Noah', 'Brown', 4, NULL),
  ('Charlotte', 'Davis', 1, NULL),
  ('Ethan', 'Miller', 2, NULL),
  ('Isabella', 'Wilson', 3, NULL),
  ('Mia', 'Moore', 4, NULL),
  ('Oliver', 'Johnson', 5, NULL),
  ('Amelia', 'Taylor', 6, NULL),
  ('Lucas', 'Anderson', 7, NULL),
  ('Sophia', 'White', 8, NULL),
  ('Jack', 'Martin', 9, NULL),
  ('Chloe', 'Thompson', 10, NULL),
  ('William', 'Harris', 1, NULL),
  ('Ruby', 'Clark', 2, NULL),
  ('Elijah', 'Lee', 3, NULL),
  ('Grace', 'Walker', 4, NULL),
  ('James', 'Carter', 5, NULL);

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