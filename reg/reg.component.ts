import { Component, OnInit } from '@angular/core';
import { CaptchaserviceComponent } from '../captchaservice/captchaservice.component';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
public code;

  constructor(private captcha: CaptchaserviceComponent) {}

  ngOnInit() {
    this .code = this.captcha.GenerateCaptcha();
  }

}
