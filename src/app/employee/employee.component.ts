import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEmpComponent } from "./show-emp/show-emp.component";
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,ShowEmpComponent,AddEditEmpComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
