import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public categories = ['electronics', 'shoes'];
  public electronics = ['laptop', 'mobile'];
  public shoes = ['nike causuals', 'lee cooper boot'];
  public data = [
    { Name: 'laptop', price: 45000.45, photo: 'assets/apple.jpg' },
    { Name: 'mobile', price: 15000.15, photo: 'assets/mble2.jpg' },
    { Name: 'nike causuals', price: 5000.75, photo: 'assets/shoes.jpg' },
    { Name: 'lee cooper boot', price: 5344.34, photo: 'assets/jag.jpg'}
  ];
  public Categories;
  public products;
  public productList;
  public prodName;
  public prodPrice;
  public prodPhoto;

  public GetCategory() {
    switch (this.Categories) {
      case 'electronics':
        this.productList = this.electronics;
        break;
      case 'shoes':
        this.productList = this.shoes;
        break;
    }
  }
  public Details(index) {
    this.prodName = this.data[index].Name;
    this.prodPrice = this.data[index].price;
    this.prodPhoto = this.data[index].photo;
  }
  public GetProduct() {
    switch (this.products) {
      case 'laptop':
        this.Details(0);
        break;
      case 'mobile':
        this.Details(1);
        break;
      case 'nike causuals':
        this.Details(2);
        break;
      case 'lee cooper boot':
        this.Details(3);
        break;
    }
  }
}


