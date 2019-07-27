import { Component } from '@angular/core';

@Component({
  selector: 'app-carsdemo',
  templateUrl: './carsdemo.component.html',
  styleUrls: ['./carsdemo.component.css']
})
export class CarsdemoComponent  {

  public cars = [
    { name: 'audi', photo : 'assets/aadi.jpg' , likes : 0, dislikes: 0},
    { name: 'benz', photo : 'assets/benz.jpg' , likes : 0, dislikes: 0},
    { name: 'jagvar', photo : 'assets/jag.jpg' , likes : 0, dislikes: 0}
  ];
public LikesCounter(car) {
  car. likes ++;
}
public DislikesCounter(car) {
  car. dislikes ++;
}
}
