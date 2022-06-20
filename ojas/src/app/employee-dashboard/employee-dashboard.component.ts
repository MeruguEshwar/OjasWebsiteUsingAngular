import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeModal } from './employee.modal';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

      
      firstName : any;
      lastName : any;
      email : any;
      mobile : any;
      salery: any;
      employData:any=[];
      formValue! : FormGroup;
      employeemodalObj: EmployeeModal = new EmployeeModal();
    

  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    
    
    this.formValue = this.formBuilder.group({
      firstName : [],
      lastName : [],
      email : [],
      mobile : [],
      salery : []
    });

    this.getEmployees();
  }


  postEmployeeDetails(){
    this.employeemodalObj.firstName = this.formValue.value.firstName;
    this.employeemodalObj.lastName = this.formValue.value.lastName;
    this.employeemodalObj.email = this.formValue.value.email;
    this.employeemodalObj.mobile = this.formValue.value.mobile;
    this.employeemodalObj.salery = this.formValue.value.salery;

   this.api.postEmployee(this.employeemodalObj).subscribe(res=>{
     alert(`${this.employeemodalObj.firstName} ur registration was done ...!`);
     this.refresh();
   })
  }


  deleteEmployee(id: number){
    this.api.DeleteUser(id).subscribe();
    this.api.getEmployee().subscribe((res:any)=>{this.employData =res;})
    alert('delete successfully');
    this.refresh();
  }

  onEdit(row: any){
    this.employeemodalObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salery'].setValue(row.salery);
  }

  updateEmployeDetails(){
    this.employeemodalObj.firstName = this.formValue.value.firstName;
    this.employeemodalObj.lastName = this.formValue.value.lastName;
    this.employeemodalObj.email = this.formValue.value.email;
    this.employeemodalObj.mobile = this.formValue.value.mobile;
    this.employeemodalObj.salery = this.formValue.value.salery;

    this.api.UpdateUser(this.employeemodalObj,this.employeemodalObj.id)
    .subscribe(res=>{
      alert("updated Successfully...");
      
    })
  }

  getEmployees(){
    this.api.getEmployee().subscribe((res:any)=>{this.employData =res;})
  }

  refresh(): void {
    window.location.reload();
}

}
