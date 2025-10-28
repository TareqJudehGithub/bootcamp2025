USE SchoolManagementDB
GO

SELECT *
FROM Lecturers
GO

SELECT Top(2) *
FROM Lecturers
GO

-- Query with filters
SELECT *
FROM Lecturers
WHERE Id = 4
GO

-- AND
SELECT *
FROM Lecturers
WHERE StaffId = '1005' AND LastName = 'Acadi'
GO

-- LIKE
SELECT *
FROM Lecturers
WHERE LastName LIKE 'A%'
GO


SELECT *
FROM Courses

