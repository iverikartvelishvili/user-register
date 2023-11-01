import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
 persons:Person[] = []
  constructor() { }


  addNewPerson(person:Person){
    this.persons.push(person)
  }

  getDataObservable():Promise<any>{
    return new Promise<any>((resolve,reject)=>{
      resolve(this.persons)
    })
  }
}
