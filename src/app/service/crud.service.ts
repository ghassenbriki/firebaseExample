import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireStore:AngularFirestore) 
  { 
  }

  createEmployee(record)
  {
      return this.fireStore.collection('employee').add(record);
  }

  displayEmployee()
  {
    return this.fireStore.collection('employee').get()
  }

  updateEmployee(empID,emp)
  {
  this.fireStore.doc('employee/'+empID).update(emp)

  }

  deleteEmployee(empID)
  {
    this.fireStore.doc('employee/'+empID).delete()

  }

}
