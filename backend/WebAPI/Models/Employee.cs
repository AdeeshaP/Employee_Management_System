namespace WebAPI.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }
        public long PhoneNo { get; set; }
        public long Salary { get; set; }
        public string Department { get; set; }
    }
}
