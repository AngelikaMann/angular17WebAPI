import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-dep',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-edit-dep.component.html',
  styleUrl: './add-edit-dep.component.css',
})
export class AddEditDepComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() dep: any;
  DepartmentId!: string;
  DepartmentName!: string;

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }
  addDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };
    this.service.addDepartment(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };
    this.service.updateDepartment(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
