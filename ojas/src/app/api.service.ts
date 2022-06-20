import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

postEmployee(data: any){
  return this.http.post<any>("http://localhost:3000/posts",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}  

getEmployee(){
  return this.http.get<any>("http://localhost:3000/posts")
  .pipe(map((res:any)=>{
    return res;
  }))
}  

getEmployeeId(id:any){
  return this.http.get<any>(`http://localhost:3000/posts${id}`)
  .pipe(map((res:any)=>{
    return res;
  }))
}  
  

UpdateUser(data: any,id: number){
  console.log(id,data)
    return this.http.put<any>("http://localhost:3000/posts/",+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
}

DeleteUser(id:number) {
  return this.http.delete<any>(`http://localhost:3000/posts/${id}`)
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
