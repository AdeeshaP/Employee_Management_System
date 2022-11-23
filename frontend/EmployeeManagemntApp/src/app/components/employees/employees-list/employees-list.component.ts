import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  // employees : Employee[] = [
  //   {
  //     id: 'xvcdgegttg545',
  //     firstName:'Adeesha',
  //     lastName:'Perera',
  //     email:'adee@gmail.com',
  //     age:24,
  //     phone:9471887766,
  //     salary:80000,
  //     department: 'IT',
  //   },
  //   {
  //     id: 'asawdefffffffff',
  //     firstName:'Apeksha',
  //     lastName:'Rathnamali',
  //     email:'rathnamali@gmail.com',
  //     age:23,
  //     phone:947013123313,
  //     salary:120000,
  //     department: 'DevOps',
  //   }
  // ];

  employees : Employee[] = [];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next:(employees) => {
        // console.log(employees);
        this.employees = employees;
      },
      error:(response) => {
        console.log(response);
      }
    });
  }

}
