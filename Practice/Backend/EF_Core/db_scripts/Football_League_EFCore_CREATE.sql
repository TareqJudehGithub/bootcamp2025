-- Server full name: TareqPC\MSSQLSRV

-- EF Course DB
CREATE DATABASE FootballLeague_EFCore
GO
USE FootballLeague_EFCore
GO

-- Practice DB
CREATE DATABASE FootballLeague_Practice
GO
USE FootballLeague_Practice
GO

SELECT *
FROM dbo.Teams
GO

SELECT *
FROM dbo.Coaches
GO


DELETE
FROM dbo.Coaches
WHERE Id = 5;

INSERT INTO dbo.Teams (Name, CreatedDate)
VALUES 
('Real Madrid', GETDATE()),
('Barcelona', GETDATE()),
('AC Milan', GETDATE()),
('Inter Milan', GETDATE()),
('Juventus', GETDATE()),
('PSG', GETDATE())
GO


INSERT INTO dbo.Teams 
VALUES
('AC Monaco', GETDATE()),
('AC Flamengo', GETDATE())
GO



