import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';
import { AddEditEmpComponent } from '../add-edit-emp/add-edit-emp.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-show-emp',
  standalone: true,
  imports: [CommonModule, AddEditEmpComponent, FormsModule],
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

  EmployeeIdFilter: string = '';
  EmployeeNameFilter: string = '';
  EmployeeDepartmentFilter: string = '';
  EmployeeDateOfJoiningFilter: string = '';
  EmployeeListWithoutFilter: any = [];


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
      this.EmployeeListWithoutFilter=data;
    });
  }
  FilterFn() {
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var EmployeeNameFilter = this.EmployeeNameFilter;
    var EmployeeDepartmentFilter = this.EmployeeDepartmentFilter;
    var EmployeeDateOfJoiningFilter = this.EmployeeDateOfJoiningFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (
      el
    ) {
      return (
        el.EmployeeId.toString()
          .toLowerCase()
          .includes(EmployeeIdFilter.toString().trim().toLowerCase()) &&
        el.EmployeeName.toString()
          .toLowerCase()
          .includes(EmployeeNameFilter.toString().trim().toLowerCase())&&
          el.Department.toString()
          .toLowerCase()
          .includes(EmployeeDepartmentFilter.toString().trim().toLowerCase())&&
          el.EmployeeDateOfJoining.toString()
          .toLowerCase()
          .includes(EmployeeDateOfJoiningFilter.toString().trim().toLowerCase())
      );
    });
  }

  sortResult(prop, asc) {
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function (a,b ) {
      if (asc) {
        return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
      } else {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
      }
    });
  }



}
