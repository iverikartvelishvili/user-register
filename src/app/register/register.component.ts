import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private datashare:DatashareService) { }
  myp:Person = new Person()

  ngOnInit(): void {
  }
  OnSaveUser(){
   this.datashare.addNewPerson(this.myp)
   this.myp = new Person()
  }
}
