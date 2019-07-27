import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genetic',
  templateUrl: './genetic.component.html',
  styleUrls: ['./genetic.component.css']
})
export class GeneticComponent implements OnInit {
public border = 1;
public merge = 2;
  constructor() { }

  ngOnInit() {
  }

}
