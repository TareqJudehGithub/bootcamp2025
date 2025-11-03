USE FootballLeague_Practice
GO

SELECT *
FROM Matches
GO

SELECT *
FROM Teams
GO

SELECT *
FROM Coaches
GO

SELECT *
FROM Leagues
GO

INSERT INTO Coaches
(Name, Country, CreatedDate, CreatedBy)
VALUES 
('Gonzalo Rodriguiz', 'Portugal', GETDATE(), 'Admin'),
('Arturo Miguel', 'Portugal', GETDATE(), 'Admin'),
('Fernando Carlos', 'Portugal', GETDATE(), 'Admin')
GO

UPDATE Teams
SET 
  LeagueId = 3,
  ModifiedBy = 'Admin', 
  ModifiedDate = GetDate()
WHERE Id = 16
GO
