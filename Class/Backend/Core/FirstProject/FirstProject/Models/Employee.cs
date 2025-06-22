using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FirstProject.Models
{
    [Table(name: "Employees", Schema = "dbo")]
    public class Employee
    {
        #region Properties
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "Employee ID")]
        [Column(TypeName = "INT")]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Employee Name")]
        [Column(TypeName = "NVARCHAR(50)")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Employee Email")]
        [Column(TypeName = "NVARCHAR(50)")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Employee Salary")]
        [Column(TypeName = "DECIMAL(18, 3)")]
        [DataType(DataType.Currency)]
        public decimal Salary { get; set; }

        [Required]
        [Display(Name = "Hire Date")]
        [Column(TypeName = "DATETIME")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime HireDate { get; set; }


        // Department Table
        public int Department_Id { get; set; }
        [ForeignKey("Id")]
        public Department Department { get; set; }
        #endregion
    }
}

// REMINDER: DB Localization!
