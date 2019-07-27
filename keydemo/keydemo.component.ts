import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keydemo',
  templateUrl: './keydemo.component.html',
  styleUrls: ['./keydemo.component.css']
})
export class KeydemoComponent  {
  public userName;
  public userPassword;
  public min;
  public max;
  public value;
  public low;
  public high;
  public msg;
  public pwdMsg;
  public regExp = /(?=.*[A-Z])\w,{4,15}/;
  public capsMsg;
  public msgCode;
  public txtCode;
  public usersdata = [
    {userName: 'suri'},
    {userName: 'suri12'},
    {userName: 'sudha12'},
    {userName: 'sudha'}
  ];
public verifyName() {
  // tslint:disable-next-line: prefer-for-of
  for ( let i = 0; i < this.usersdata.length; i++) {
  // tslint:disable-next-line: triple-equals
  if (this.userName == this.usersdata[i].userName) {
    this.msg = 'user Name Taken - Try Another';
    return;
  } else {
    this.msg = 'Available';
  }
  }
}
}
//   // tslint:disable-next-line: align
//   public ShowGrade(min,max,value,low,high) {
//   this.min = min;
//   this.max = max;
//   this.value = value;
//   this.low = low;
// tslint:disable-next-line: whitespace
// this.high =high;
// }
//  public CheckCaps(e) {
//    if(else.keyCode>67 && e.keyCode<=90) 
//    this.capsMsg = 'warning ! caps on';
//    else{
//    this.capsMsg = '';
//  }
// }
//  public ShowMsg() {
//    this.msgCode ='bank code in block letters only';
//  }
//  public HideMsg() {
//    this. msgCode = '';
//    this.txtCode = this.txtCode.toUpperCase();
//  }
//  public verifyPassword() {
//    if(this.userPassword.match(this.regExp)){
//      this.pwdMsg = 'strong password';
//      this.ShowGrade(1,100,100,0,0);
//    }else{
//      if(this.userPassword.length < 4){
//        this.pwgMsg = 'poor password';
//        this.ShowGrade(1,100,100,60,80);
//      }else{
//        this.pwdMsg = 'weak password';
//        this.ShowGrade(1,100,100,40,80);
//      }
//      console.log(this.pwdMsg);
//      }
//    }
//    }
//   }
// }
// }