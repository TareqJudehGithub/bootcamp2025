USE master
GO

CREATE DATABASE test_BD
GO



EXEC sp_renamedb 'test_BD', 'test_DB'
GO

USE test_DB
GO