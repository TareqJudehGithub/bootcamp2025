USE SchoolManagementDB
GO

-- AVG()



ALTER TABLE Enrollment
ALTER COLUMN Grade DECIMAL(3,1) NULL
GO

UPDATE Enrollment
SET Grade = 92.7
WHERE Grade IS NULL
GO

SELECT *
FROM Enrollment
GO

SELECT 
  Stu.StudentId, 
  Stu.FirstName + ' ' + Stu.LastName [Student],
  CAST(AVG(Enr.Grade) AS DECIMAL(10, 2)) [Score]
FROM Enrollment [Enr]
INNER JOIN Students [Stu]
ON Enr.StudentId = Stu.Id
GROUP BY  Stu.StudentId, Stu.FirstName + ' ' + Stu.LastName
GO
