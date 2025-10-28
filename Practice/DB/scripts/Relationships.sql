USE SchoolManagementDB
GO

BEGIN TRANSACTION
  CREATE TABLE ProgrammesOfStudy
  (
    Id INT PRIMARY KEY IDENTITY(1, 1),
    Name NVARCHAR(50) NOT NULL,
    DurationInYears DECIMAL(10, 2) NOT NULL,  
  )
  GO
COMMIT

BEGIN TRANSACTION
  CREATE TABLE Classes
  (
    Id INT PRIMARY KEY IDENTITY(1, 1),
    [Time] TIME,
    LecturerId INT,
    CourseId INT,
    CONSTRAINT FK_Classes_Lecturers FOREIGN KEY (LecturerId) REFERENCES Lecturers(Id),
    CONSTRAINT FK_CLasses_Courses FOREIGN KEY (CourseId) REFERENCES Courses(Id)
  )
  GO
  COMMIT

DROP TABLE Classes
GO

BEGIN TRANSACTION
  CREATE TABLE Enrollment
  (
    Id INT PRIMARY KEY IDENTITY(1, 1),
    Grade VARCHAR(2),
    StudentId INT,
    ClassId INT,
    CONSTRAINT FK_Enrollment_Students FOREIGN KEY (StudentId) REFERENCES Students(Id),
    CONSTRAINT FK_Enrollment_Classes FOREIGN KEY (ClassId) REFERENCES Classes(Id)
  )
  GO
  
-- COMMIT



  -- ROLLBACK

