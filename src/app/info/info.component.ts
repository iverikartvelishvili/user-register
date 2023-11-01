import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private datashare:DatashareService) { }
  
  arr:Person [] = []
  ngOnInit(): void {
     this.datashare.getDataObservable().then((Response:Person[])=>{ 
         this.arr = [].concat(Response as any)
     })
  }

}
