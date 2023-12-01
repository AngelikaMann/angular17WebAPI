import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDepComponent } from "./show-dep/show-dep.component";
import { AddEditDepComponent } from './add-edit-dep/add-edit-dep.component';
@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, ShowDepComponent, AddEditDepComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
