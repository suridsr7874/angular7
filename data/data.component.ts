import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent  {
public products = [
          {name: 'Samsung tv', price: 45000.45, category: 'electronics'},
          {name: 'Mobile', price: 14500.45, category: 'electronics'},
          {name: 'Shoes', price: 5000.45, category: 'shoes'},
];
public selectedValue = 'All';
public onCategoryChanged(selectedValue) {
  this.selectedValue = selectedValue;
}

}
