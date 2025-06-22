USE Bootcamp25
GO

-- Views

-- Create a new View
CREATE VIEW join_emp_dep AS
SELECT SUM(Emp.salary) AS Total_Salaries, Dep.department_name
FROM employees AS Emp
JOIN Departments AS Dep
ON Emp.Department_id = Dep.Department_Id
GROUP BY  Dep.department_name
HAVING SUM(Emp.salary) > 10000
GO

-- Update a View

ALTER VIEW join_emp_dep AS
SELECT SUM(Emp.salary) AS Total_Salaries, Dep.department_name, Dep.department_id
FROM employees AS Emp
JOIN Departments AS Dep
ON Emp.Department_id = Dep.Department_Id
GROUP BY  Dep.department_name, Dep.department_id 
HAVING SUM(Emp.salary) > 10000
GO

-- Execute a view
SELECT *
FROM join_emp_dep
GO