
USE Bootcamp25
GO


SELECT  first_name, salary,
CASE
  WHEN salary > 12000 THEN 'High Salary'
  WHEN salary BETWEEN 5000 AND 12000 THEN 'Average Salary'
  ELSE 'Low Salary'
END AS Salary_Category
FROM employees
GO

-- 

