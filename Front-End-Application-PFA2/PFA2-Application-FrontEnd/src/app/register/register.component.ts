
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DialogData } from '../authentication/authentication.component';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {
  returnUrl!: string;

  @Output() toLogin = new EventEmitter<DialogData>();
  login() {
    this.toLogin.emit({ isLogin: true, success: false });
  }

  onSuccess() {
    this.router.navigate([this.returnUrl]);
    this.toLogin.emit({ isLogin: true, success: true });
  }

  hide1 = true
  hide = true
  username = new FormControl('', [
    Validators.required,
  ]);

  password = new FormControl('', [
    Validators.required,
  ]);

  password1 = new FormControl('', [
    Validators.required,
  ]);

  name = new FormControl('', [
    Validators.required,
  ]);

  email = new FormControl('', [
    Validators.required,
  ]);

  date = new FormControl('', [
    Validators.required,
  ]);
  address = new FormControl('', [
    Validators.required,
  ]);



  constructor(private authService: AuthentificationService,
    private router: Router,
    private route: ActivatedRoute) { }
  submit() {
    console.log(this.username.value)
    this.authService.register(this.username.value, this.password.value ,this.email.value , this.name.value , this.address.value ,this.date.value  ).pipe(first())
      .subscribe(
        (data: any) => {
          console.log(data);
          this.onSuccess();
        },
        error => {
          console.log(error.error);
          this.onSuccess();
        });
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  toggleHide() {
    this.hide = !(this.hide);
  }
  toggleHide1() {
    this.hide1 = !(this.hide1);
  }
}