INSERT INTO department (name)
VALUES
('Sport'),
('Medical'),
('Administrative'),
('Support');

INSERT INTO role (title, salary, department_id)
VALUES
('Player', 50000, 1),
('Coach', 20000, 1),
('Physio', 23000,2),
('Doctor',35000,2),
('Technical Director', 35000,3),
('Accountant',28000,3),
('Groundsman',8000,4),
('Security',8000,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 2, 5),
  ('Virginia', 'Woolf', 4, NULL),
  ('Piers', 'Gaveston', 5, NULL),
  ('Charles', 'LeRoi', 3, 4),
  ('Katherine', 'Mansfield', 8, NULL),
  ('Dora', 'Carrington', 6, NULL),
  ('Edward', 'Bellamy', 1, 2),
  ('Montague', 'Summers', 1, 2),
  ('Octavia', 'Butler', 1, 2),
  ('Unica', 'Zurn', 7, NULL);