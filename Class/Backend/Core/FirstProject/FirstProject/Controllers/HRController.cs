using FirstProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FirstProject.Controllers
{
    public class HRController : Controller
    {
        private readonly AppDbContext _db;
        public HRController(AppDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {

            var model = _db.Employees.Include(dept => dept.Department).ToList();
            return View(model);
        }
    }
}
// REMINDER: DB Localization!
