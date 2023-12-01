import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';
import { AddEditEmpComponent } from '../add-edit-emp/add-edit-emp.component';

@Component({
  selector: 'app-show-emp',
  standalone: true,
  imports: [CommonModule, AddEditEmpComponent],
  templateUrl: './show-emp.component.html',
  styleUrl: './show-emp.component.css',
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) {}
  EmployeeList: any = [];
  dataItem: any;
  ModalTitle!: string;
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: '',
      Department:"",
       DateOfJoining:"",
       PhotoFileName:"anonymous.png"
    };
    this.ModalTitle = 'Add Employee';
    this.ActivateAddEditEmpComp = true;
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }
  editClick(item: any) {
    console.log(item)
    this.emp = item;
    this.ModalTitle = 'Edit Employee';
    this.ActivateAddEditEmpComp = true;
  }
  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteEmployee(item.EmployeeId).subscribe((data) => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }

    this.emp = item;
    this.ModalTitle = 'Edit Employee';
    this.ActivateAddEditEmpComp = true;
  }

  refreshEmpList() {
    this.service.getDepEmplList().subscribe((data) => {
      this.EmployeeList = data;
    });
  }
}
