
-- Renaming a table
EXEC sp_rename 'ProgrammesOfStudy', 'ProgramOfStudy'
GO
-- Rename column name
EXEC sp_rename 'Students.ProgramOfStudy', 'ProgramOfStudyId', 'COLUMN'
GO

