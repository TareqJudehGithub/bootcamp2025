
USE Bootcamp25
GO

CREATE FUNCTION dbo.high_salary
(
  @emp_id INT  
)
RETURNS DECIMAL(18, 3)
AS 
BEGIN
DECLARE @salary DECIMAL(18, 3)
SELECT 
  @salary = salary
  FROM employees
  WHERE employee_id = @emp_id AND salary > 50005
  RETURN @salary
END
GO

-- Update a function
ALTER FUNCTION dbo.high_salary
(
  @emp_id INT  
)
RETURNS DECIMAL(18, 3)
AS 
BEGIN
DECLARE @salary DECIMAL(18, 3)
SELECT 
  @salary = salary
  FROM employees
  WHERE employee_id = @emp_id AND salary > 5000 
  RETURN @salary 
END
GO

-- Execute a function
SELECT dbo.high_salary(employee_id) AS Salary
FROM employees