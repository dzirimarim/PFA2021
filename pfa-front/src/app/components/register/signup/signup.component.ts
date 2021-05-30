
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RegisterService } from 'src/app/services/register.service';
import { DialogData } from '../auth/auth.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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


  constructor(private authService: RegisterService,
    private router: Router,
    private route: ActivatedRoute) { }
  submit() {
    console.log(this.username.value)
    this.authService.register({ username: this.username.value, password: this.password.value, email: this.email.value, name: this.name.value, address: this.address.value })
      .pipe(first())
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