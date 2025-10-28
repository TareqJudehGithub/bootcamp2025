USE SchoolManagementDB
GO


-- INNER JOINs

-- Student programs
SELECT 
  stu.Id [Student Id],stu.FirstName [First Name], stu.LastName AS [Last Name], pro.Name AS Program, pro.DurationInYears
FROM Students AS stu
INNER JOIN ProgramOfStudy AS pro
ON stu.ProgramOfStudyId = pro.Id
GO


-- Classes and instructors
SELECT 
  cla.Id [ClassId],
  Cou.CourseName [Course Name], lec.FirstName + ' ' + lec.LastName [Instructor],
  cla.[Time] [Course Time]
FROM Classes AS cla
INNER JOIN Lecturers AS lec
ON cla.LecturerId = lec.Id
INNER JOIN Courses AS Cou
ON cla.CourseId = Cou.Id

GO



SELECT *
FROM Classes
GO

SELECT *
FROM Courses
GO

SELECT *
FROM Students
GO

SELECT *
FROM ProgramOfStudy
GO

SELECT *
FROM Enrollment
GO
