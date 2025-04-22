USE Bootcamp25
GO

CREATE TABLE Departments
(
  Department_Id INT NOT NULL,
  Department_Name NVARCHAR(50) NOT NULL,
  PRIMARY KEY (Department_Id)
)
GO

CREATE TABLE Job_Description
(
  Job_ID INT NOT NULL,
  Job_Description NVARCHAR(20) NOT NULL,
  Date_Created DATE NOT NULL,
  PRIMARY KEY (Job_ID)
)
GO