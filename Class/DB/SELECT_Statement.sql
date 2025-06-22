
USE Bootcamp25
GO

SELECT *
FROM regions
GO

SELECT *
FROM locations
GO

SELECT *
FROM employees
GO

SELECT employee_id, first_name, salary
FROM employees
WHERE salary < 5000
GO

-- Count

-- SUM

-- WHERE 
-- BETWEEN

-- Random number between 1 and 10
select ROUND(rand() * 9, 0) + 1
GO

SELECT AVG(salary) AS Avg_Salary
FROM employees

SELECT  first_name, SUM(salary) as Total_Salaries
FROM employees
WHERE first_name in ('Adam')
GROUP BY first_name 
GO


SELECT DATEDIFF(year, '2020/08/25', '2011/08/25') AS DateDiff;