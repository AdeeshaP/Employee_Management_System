import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

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

  deleteEmployee(id : string) {
    this.empService.deleteEmployee(id).subscribe( {
      next : (response) => {
        this.router.navigate(['employees']);
      }
    })
  }

}
