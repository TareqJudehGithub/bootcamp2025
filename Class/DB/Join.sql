USE Bootcamp25
GO

SELECT *
FROM employees
GO

SELECT *
FROM departments
GO

SELECT Emp.first_name, Dep.Department_Name
FROM employees AS Emp
JOIN Departments AS Dep
ON Emp.Department_id = Dep.Department_Id
WHERE Dep.department_name = 'IT'
GO


SELECT SUM(Emp.salary) AS Total_Salaries, Dep.department_name
FROM employees AS Emp
JOIN Departments AS Dep
ON Emp.Department_id = Dep.Department_Id
GROUP BY  Dep.department_name
HAVING SUM(Emp.salary) > 10000
GO