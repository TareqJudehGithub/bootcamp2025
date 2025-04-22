USE Bootcamp25
GO

CREATE TABLE employees 
(
  Emp_Id INT NOT NULL,
  First_Name NVARCHAR(15) NOT NULL,
  Last_Name NVARCHAR(15) NOT NULL,
  Country NVARCHAR(15) NOT NULL,
  Birth_Date DATE NOT NULL,
  Salary DECIMAL (18, 3) NOT NULL,
  Commission DECIMAL (18, 3) NOT NULL,
  Manager_Id INT NOT NULL,
  National_ID INT NOT NULL,
  Phone INT NOT NULL,
  Target BIT NOT NULL,
  PRIMARY KEY (Emp_Id)
)
GO

SELECT *
FROM employees
GO