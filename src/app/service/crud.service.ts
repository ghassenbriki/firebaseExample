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

}
