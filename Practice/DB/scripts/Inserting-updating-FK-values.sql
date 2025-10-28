USE SchoolManagementDB
GO

SELECT *
FROM Classes
GO
-- 6, 15-22
INSERT INTO Classes
VALUES
('08:00', 3, 1),
('09:00', 7, 13),
('10:00', 14, 2),
('11:00', 5, 15),
('12:00', 1, 17),
('01:00', 2, 16),
('02:00', 4, 14),
('03:00', 9, 1)
GO

SELECT *
FROM Courses
GO
-- 1, 2, 13, 14, 15, 16, 17

SELECT *
FROM Students
GO
-- 12-18
  INSERT INTO Students
  VALUES
  ('Huda', 'Bassem','2001-07-19', 'FE974628', 12),
  ('Mazen', 'Arabi','1998-06-13', 'PE481165', 10),
  ('Lue', 'Charles','2007-11-11', 'DB325875', 9),
  ('Zoey', 'Belrini','1976-04-15', 'IT321789', 12),
  ('Muneer', 'Abbasi','1997-10-03', 'DN103570', 13),
  ('Wael', 'Mella','2004-02-24', 'DB954700', 11),
  ('Salah', 'Saleem','1982-01-14', 'PL468521', 9)
  GO

SELECT *
FROM Enrollment
GO

-- 12-18
-- 6, 15-22
INSERT INTO Enrollment
VALUES
(NULL, 15, 15),
(NULL, 12, 18),
(NULL, 13, 16),
(NULL, 14, 17),
(NULL, 16, 6),
(NULL, 17, 22),
(NULL, 18, 21)
GO

SELECT * 
FROM Lecturers
GO
-- 1-7, 9, 14

SELECT *
FROM ProgramOfStudy
GO
-- 9 DB, 10 PL, 11 .Net, 12 FE, 13IT
INSERT INTO ProgramOfStudy
VALUES
('Database Design & Administration', 2),
('Programming Language', 2),
('Microsoft .Net 10', 3),
('Frontend Technologies', 1),
('Bsc in IT', 4)
GO



  UPDATE Students
  SET ProgramOfStudyId = 6
  WHERE Id IN (16, 17)
  GO



  INSERT INTO ProgramOfStudy
  VALUES
  ('Bsc. in Information Technology', 4)
  GO



  UPDATE ProgramOfStudy
  SET Name = 'Programming Language'
  WHERE Id IN (2, 4)


