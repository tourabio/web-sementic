import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any[]
  constructor(private employeesService:DataService) { }

  ngOnInit(): void {
    
    this.employeesService.getEmployees().subscribe(
      (res)=>{this.employees = res.results.bindings
      console.log(this.employees)
    },
    (err)=>{
      console.log("error : ",err)
    }
    )
  }

}
