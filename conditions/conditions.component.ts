import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent  {

  constructor() { }
public products = [
  {name: 'samsung tv' , price : 45000.45,  category : 'electronics'},
  {name: 'lee cooper boot' , price : 5000.35, category : 'shoes'},
  {name: 'mobile' , price : 25000.35, category : 'electronics'},
  {name: 'laptop' , price : 55000.35, category : 'electronics'},
  {name: 'shirts' , price : 1999.35, category : 'shirts'},
  {name: 'reebook' , price : 5000.35, category : 'shoes'},
  {name: 'cars' , price : 825000.35, category : 'electronics'},
  {name: 'T-shirts' , price : 999.35, category : 'shirts'},
];
public optFilter = 'All';

}
