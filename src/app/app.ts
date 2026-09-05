import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { response } from 'express';

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
 }

