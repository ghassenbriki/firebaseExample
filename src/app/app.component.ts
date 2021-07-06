import { Component,OnInit } from '@angular/core';
import {CrudService} from './service/crud.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'project';

  
  employee:Array<any>
  employeeName: String;
  age: Number;
  adress: String;
  message:String
  bool:Boolean=false



  constructor(public crudService:CrudService)
  {
    this.employee=[]
  }

  ngOnInit()
  {
    this.crudService.displayEmployee().subscribe(sanpshot=>
      {
        sanpshot.docs.map(doc=>
          {
            this.employee.push({edited:false,id:doc.id,name:doc.data()['name'],age:doc.data()['age'],adress:doc.data()['adress']})
          })
          console.log(this.employee)
          
      })

}

  addEmp()
  {
   
    let record={};
    record['adress']=this.adress;
    record['age']=this.age;
    record['name']=this.employeeName;
  
  
  

    this.crudService.createEmployee(record).then(res=>
      {
        this.bool=true
        this.employeeName=''
        this.age=undefined
        this.adress=''
        this.message='Employee added succefully!'
       setTimeout(()=>{this.bool=false},2000)
       
     
       
        
        
      }).catch(err=>
        {
          console.log(err)
        })

  }

  setEmp(oldEmp)
  {
    oldEmp.edited=true
    oldEmp.editedName=oldEmp.name
    oldEmp.editedAge=oldEmp.age
    oldEmp.editedAdress=oldEmp.adress
  }

  updateEmp(emp)
  {
    let record={}
    record['name']=emp.editedName
    record['age']=emp.editedAge
    record['adress']=emp.editedAdress

    this.crudService.updateEmployee(emp.id,record)
    emp.edited=false
  }

  deleteEmp(id)
  {
    this.crudService.deleteEmployee(id)
  }
  

}
