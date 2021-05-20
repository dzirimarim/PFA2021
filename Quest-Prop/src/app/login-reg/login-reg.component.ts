import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.scss']
})
export class LoginRegComponent implements OnInit {
  orderForm1!: FormGroup;
  orderForm2!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.orderForm1 = this.formBuilder.group({
      email: [''],
      password: ['']
    });  
    this.orderForm2 = this.formBuilder.group({
      username: [''],
      email2: [''],
      password2: [''],
      repassword : ['']
    });    
  }
  submit() {
    console.log(this.orderForm1.value);
  }
  submit2() {
    console.log(this.orderForm2.value);
  }

}
