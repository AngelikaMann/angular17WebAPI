import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';
import { AddEditDepComponent } from '../add-edit-dep/add-edit-dep.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-dep',
  standalone: true,
  templateUrl: './show-dep.component.html',
  styleUrl: './show-dep.component.css',
  imports: [CommonModule, AddEditDepComponent, FormsModule],
})
export class ShowDepComponent implements OnInit {
  constructor(private service: SharedService) {}
  DepartmentList: any = [];
  dataItem: any;
  ModalTitle!: string;
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: '',
    };
    this.ModalTitle = 'Add Department';
    this.ActivateAddEditDepComp = true;
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }
  editClick(item: any) {
    this.dep = item;
    this.ModalTitle = 'Edit Department';
    this.ActivateAddEditDepComp = true;
  }
  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteDepartment(item.DepartmentId).subscribe((data) => {
        alert(data.toString());
        this.refreshDepList();
      });
    }

    this.dep = item;
    this.ModalTitle = 'Edit Department';
    this.ActivateAddEditDepComp = true;
  }

  refreshDepList() {
    this.service.getDepList().subscribe((data) => {
      this.DepartmentList = data;
      this.DepartmentListWithoutFilter=data;
    });
  }




}
