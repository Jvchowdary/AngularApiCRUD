import { Component, Input } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-addi-edit-employee',
  standalone: true,
  imports: [],
  templateUrl: './addi-edit-employee.component.html',
  styleUrl: './addi-edit-employee.component.css'
})
export class AddiEditEmployeeComponent {
  
  constructor(private service: ApiserviceService) { }
  @Input() emp: any;
  EmployeeId = "";
  EmployeeName = "";
  Department = "";
  DateOfJoining = "";
  PhotoFileName = "";
  PhotoFilePath = "";
  DepartmentList: any = [];


  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {

    this.service.getDepartmentList().subscribe((data: any) => {
      this.DepartmentList = data;

      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
    });
  }

  addEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
