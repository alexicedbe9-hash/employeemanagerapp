import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    CommonModule
  ],
  styleUrl: './app.css'
})
export class App implements OnInit {
  //protected readonly title = signal('employeemanagerapp');
  public employees: Employee[] = [];

  constructor(private employerService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }
  
  // TODO changer le subscribe
  public getEmployees(): void {
    this.employerService.getEmployees().subscribe(
     (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 }

