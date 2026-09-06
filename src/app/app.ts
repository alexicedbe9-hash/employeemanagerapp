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

  public getEmployees(): void {
    this.employerService.getEmployees().subscribe({
      next : (response: Employee[]) => {
        this.employees = response;
      },
      error : (error : HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(employee : Employee | null, mode: string): void {
    const container = document.getElementById("main-container");  
    const button = document.createElement('button');

    button.type = "button";
    button.style.display = "none"
    button.setAttribute("data-toggle", "modal");
    if (mode == 'add'){
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode == 'edit'){
      button.setAttribute('data-target', '#editEmployeeModal');
    }
    if (mode == 'delete'){
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }

    container?.appendChild(button);
    button.click();
  }
 }



