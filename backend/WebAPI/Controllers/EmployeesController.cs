using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly Context _context;

        public EmployeesController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _context.Employees.ToListAsync();

            return Ok(employees);
        }

        [HttpGet]
        [Route("{Id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid Id)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(x => x.Id == Id);

            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employee)
        {
            employee.Id = Guid.NewGuid();
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();

            return Ok(employee);
        }


        [HttpPut]
        [Route("{Id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid Id, [FromBody] Employee updatedEmployee)
        {

            var employee = await _context.Employees.FindAsync(Id);

            if (employee == null)
            {
                return NotFound();
            }

            employee.FirstName = updatedEmployee.FirstName;
            employee.LastName = updatedEmployee.LastName;
            employee.Email = updatedEmployee.Email;
            employee.Age = updatedEmployee.Age;
            employee.PhoneNo = updatedEmployee.PhoneNo;
            employee.Salary = updatedEmployee.Salary;
            employee.Department = updatedEmployee.Department;

            await _context.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpDelete]
        [Route("{Id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid Id)
        {

            var employee = await _context.Employees.FindAsync(Id);

            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);

            await _context.SaveChangesAsync();

            return Ok(employee);
        }
    }
}
