USE SchoolManagementDB
GO

-- Remove NULL values from TABLE Lecturers - Column: DateOfBirth
UPDATE Lecturers
SET DateOfBirth = '1945-01-20'
WHERE Id = 9
GO


SELECT *
FROM Lecturers
GO
