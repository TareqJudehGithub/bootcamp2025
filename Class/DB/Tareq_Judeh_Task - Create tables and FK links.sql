-- Task: MS SQL CREATE TABLE 

-- Use <Type_Your_Database_Name> 
USE Bootcamp25
GO

-- Create table - Departments
CREATE TABLE Departments
(
  Department_Id INT NOT NULL,
  Department_Name NVARCHAR(50) NOT NULL,
  PRIMARY KEY (Department_Id)
)
GO

-- Create table - Country
CREATE TABLE Countries
(
  Country_Id INT IDENTITY(500, 25) NOT NULL,
  Country_Name_Arb NVARCHAR(20) NOT NULL,
  Country_Name_Eng VARCHAR(20) NOT NULL,
)
GO

-- Create table - Job_Description
CREATE TABLE Job_Description
(
  Job_ID INT NOT NULL,
  Job_Description NVARCHAR(20) NOT NULL,
  Date_Created DATE NOT NULL,
  PRIMARY KEY (Job_ID)
)
GO

-- Create table - Employees
CREATE TABLE Employees 
(
  Emp_Id INT NOT NULL,
  First_Name NVARCHAR(15) NOT NULL,
  Last_Name NVARCHAR(15) NOT NULL,
  Country NVARCHAR(15) NOT NULL,
  Birth_Date DATE NOT NULL,
  Salary DECIMAL (18, 3) NOT NULL,
  Commission DECIMAL (18, 3) NOT NULL,
  Manager_Id INT NOT NULL,
  Country_Id INT NOT NULL,
  Department_Id INT NOT NULL,
  National_ID INT NOT NULL,
  Phone INT NOT NULL,
  Target BIT NOT NULL,
  PRIMARY KEY (Emp_Id),
  -- Foreign keys links for tables Countries and Departments
  CONSTRAINT FK_Employees_Countries FOREIGN KEY (Country_Id) REFERENCES Countries(Country_Id),
  CONSTRAINT FK_Employees_Departments FOREIGN KEY (Department_ID) REFERENCES Departments(Department_ID)
)
GO

