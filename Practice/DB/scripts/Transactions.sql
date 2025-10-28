USE SchoolManagementDB
GO

-- Transaction - Create a staging area for changes

SELECT *
FROM Lecturers
GO


BEGIN TRANSACTION
-- INSERT UPDATE  DELETE
COMMIT -- to confirm

ROLLBACK -- to undo

-- 1
BEGIN TRANSACTION
INSERT INTO Lecturers
VALUES
('Marushka', 'Boorgh', '1969', '109')
GO

-- 2  COMMIT to confirm changes
COMMIT

-- Or ROLLBACK to undo changes
ROLLBACK