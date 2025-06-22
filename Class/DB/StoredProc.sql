

USE Bootcamp25
GO



create table employee_details 
(
employee_id int primary key , 
employee_f_name nvarchar(100) not null , 
employee_salary decimal(10,3) not null , 
)
GO

-- Create a SP, where a use can delete an employee, but 1st to check
-- if the employee is there or not.

CREATE PROCEDURE dbo.delete_employee

