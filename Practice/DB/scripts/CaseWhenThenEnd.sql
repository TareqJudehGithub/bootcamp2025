USE SchoolManagementDB
GO

SELECT * 
FROM Lecturers
GO

SELECT *,
CASE
 WHEN DateOfBirth is NULL 
  THEN 'N/A' 
  ELSE DateOfBirth
 END
FROM Lecturers


INSERT INTO Lecturers
VALUES 
('Gandalf', 'The Grey', NULL, '1007')
GO




