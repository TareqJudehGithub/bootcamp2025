-- Alter a specific column constraint 
ALTER TABLE Lecturers
ALTER COLUMN DateOfBirth DATE NOT NULL
GO


ALTER TABLE Students
ALTER COLUMN ProgramOfStudyId INT NOT NULL
GO

ALTER TABLE Courses
ADD ProgramOfStudyId INT NULL
GO
