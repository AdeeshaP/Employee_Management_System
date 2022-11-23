import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
      id: '',
      firstName:'',
      lastName:'',
      email:'',
      age:0,
      phoneNo:0,
      salary:0,
      department: '',
  }
  constructor(private empService : EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    // console.log(this.addEmployeeRequest);
     this.empService.addEmployee(this.addEmployeeRequest)
     .subscribe({     //because this is obervable , need to subscribe before we actually trigger it. 
      next : (emp) => {
        // console.log(emp);
        this.router.navigate(['employees']);
      }
     });
  }

}
