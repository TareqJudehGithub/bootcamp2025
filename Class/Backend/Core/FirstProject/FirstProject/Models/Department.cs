using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FirstProject.Models
{
    [Table(name: "Departments", Schema = "dbo")]
    public class Department
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "Department_ID")]
        [Column(TypeName = "INT")]
        public int Department_Id { get; set; }

        [Required]
        [Display(Name = "Department")]
        [Column(TypeName = "NVARCHAR(50)")]
        public string Name { get; set; }
        public int Employee_Id { get; set; }
        public Employee Employees { get; set; }

    }
}

// REMINDER: DB Localization!
