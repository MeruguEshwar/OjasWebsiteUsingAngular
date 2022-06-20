import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  // const empdata:{
  //   fname:string,
  //   lname:string,
  //   email:string,
  //   mobil:string,
  //   salery:string
  //   }
  
 
  

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getEmployee().subscribe()
  }

}
