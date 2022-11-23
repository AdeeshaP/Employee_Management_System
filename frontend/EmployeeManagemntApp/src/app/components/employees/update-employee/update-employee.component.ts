import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empDetails : Employee = {
      id: '',
      firstName:'',
      lastName:'',
      email:'',
      age:0,
      phoneNo:0,
      salary:0,
      department: '',
  }
  constructor(private route: ActivatedRoute, private empService : EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.empService.getEmployee(id).subscribe(
            {
              next: (response) => {
                this.empDetails = response;
              }
            }
          );
        }
      }
    })
  }

  updateEmployee(){
    this.empService.updateEmployee(this.empDetails.id, this.empDetails).subscribe({
      next : (resp) => {
        this.router.navigate(['employees']);
      }
    });
  }

}
