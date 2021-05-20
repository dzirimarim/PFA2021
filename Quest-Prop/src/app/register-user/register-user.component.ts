import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { TUser } from '../models/TUser';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  constructor(private signup: RegistrationService,private router: Router) { 
  }

  ngOnInit() {
  }
  showMessage:boolean=false
  message : any ;
  signUpUser(f : any) {
   let user=new TUser(f.value['name'],
    f.value['username'],
    f.value['password'],
    f.value['dateOfBirth'],
    f.value['adress'],
    f.value['email'],
    [""]);
    this.signup.signup(user).pipe(first()).subscribe(
          data => {
              console.log(data);
              if(data){
               this.showMessage=true
               this.message=data['message']
              }
             else    {
               this.showMessage=true
             this.message="Error"
             }
              this.router.navigate(['/']);
            },
          error => {
            this.showMessage=true
            this.message="Error"
          });
      console.log(f.value)
  }
}
interface Adress {
  street: string,
  city: string,
  state: string
}