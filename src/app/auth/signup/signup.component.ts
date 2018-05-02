import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userLangs;
  maxDate;
  userGeo;
  userPlatform;

  constructor() { }

  ngOnInit() {

    // set max date for date picker to 18 year old max
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    console.log(this.maxDate);

    // get browser locale
    this.userLangs = navigator.languages;
    console.log(this.userLangs);
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
