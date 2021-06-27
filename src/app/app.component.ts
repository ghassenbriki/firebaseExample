import { Component } from '@angular/core';
import {CrudService} from './service/crud.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  
  employee:any
  employeeName: String;
  age: Number;
  adress: String;
  message:String
  bool:Boolean=false

  constructor(public crudService:CrudService)
  {

  }

  addEmp()
  {
   
    let record={};
    record['name']=this.employeeName;
    record['age']=this.age;
    record['adress']=this.adress;
  

    this.crudService.createEmployee(record).then(res=>
      {
        this.bool=true
        this.employeeName=''
        this.age=undefined
        this.adress=''
        this.message='Employee added succefully!'
       setTimeout(()=>{this.bool=false},2000)
     
       
        console.log(res)
        
      }).catch(err=>
        {
          console.log(err)
        })

  }

}
