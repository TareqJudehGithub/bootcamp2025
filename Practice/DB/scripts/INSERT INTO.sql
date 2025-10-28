USE SchoolManagementDB
GO


INSERT INTO Courses
VALUES
('Database Development', 'DB101', 3),
('C++ Development', 'CP101', 3),
('.Net Entity Core 9', 'EF101', 3),
('TypeScript & React', 'TS101', 3),
('.Net Core - Web API 10', 'AP101', 3),
('React Full Guide', 'Re101', 3),
('Mastering Frontend', 'FE101', 3)
GO

SELECT *
FROM Courses
GO

INSERT INTO Lecturers
VALUES
('Maximillian', 'Acadi', '2001-05-24', '1005')
GO

SELECT *
FROM Lecturers
GO


INSERT INTO Students
VALUES 
('Alen', 'Mason', '2009-02-14', '100001', 'Fullstack'),
('Betty', 'Walter', '2006-01-22', '100002', 'Frontend'),
('Mohammad', 'Ali', '2002-07-17', '100003', 'Backend')
GO

SELECT *
FROM Students
GO
